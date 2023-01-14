import { boardData, currentStatus } from '@stores/stores';
import type { IssueType } from '@lib/types';
import { drawerStore } from '@skeletonlabs/skeleton';

export const onFormSubmit = (
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	},
	id: string
) => {
	let currStatus: string;

	currentStatus.subscribe((currentStatus) => {
		currStatus = currentStatus;
	});

	// Edit the issue
	if (id === 'edit') {
		const data = getData(e, id);
		// Update the issue in the board data store
		boardData.update((boardData) => {
			// Find the column that matches the status of the new issue
			const column = boardData.find((column) => column.status === currStatus);

			// Find the issue
			const issue = column?.issues.find((issue) => issue.id === data.id);

			if (!issue) return boardData;

			// Remove the issue from the old column
			column?.issues.splice(column?.issues.indexOf(issue), 1);

			// Update the issue
			if (issue) {
				issue.title = data.title;
				issue.description = data.description;
				issue.status = data.status;
				issue.deadline = data.deadline;
			}

			// Find the new column

			const newColumn = boardData.find((column) => column.status === data.status);

			// Add the issue to the new column

			newColumn?.issues.push(data);

			return boardData;
		});

		// Reset the form
		resetForm(e);
	} else {
		const data = getData(e, null);
		// Add the new issue to the board data store
		boardData.update((boardData) => {
			// Find the column that matches the status of the new issue
			const column = boardData.find((column) => column.status === data.status);

			// Add the new issue to the column
			column?.issues.push(data);

			return boardData;
		});

		// Reset the form
		resetForm(e);
	}
};

// Get all the data from the form
const getData = (
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	},
	id: string | null
) => {
	// Get all the data from the form
	const formData = new FormData(e?.currentTarget);

	if (!id) {
		formData.append(
			'assignee',
			`https://avatars.githubusercontent.com/u/${Math.floor(Math.random() * 10000 + 1)}?v=4`
		);

		// Create an id for the issue from its name
		formData.append(
			'id',
			`${formData.get('title')?.slice(0, 2).toString().toUpperCase()}${Math.floor(
				Math.random() * 100 + 1
			)}` as string
		);
	}

	// Convert the form data to an object
	const data = Object.fromEntries(formData.entries()) as unknown as IssueType;

	return data;
};

// Reset the form and close the drawer
const resetForm = (e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) => {
	e.currentTarget.reset();
	return drawerStore.close();
};
