import { boardData, localStorageBoardData } from '@stores/stores';
import type { IssueType, BoardDataType } from '@lib/types';
import { drawerStore } from '@skeletonlabs/skeleton';

export const onFormSubmit = (
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	},
	id: string
) => {
	// Get all the data from the form

	// Edit the issue
	if (id === 'edit') {
		const data = getData(e, id);
		// Update the issue in the board data store
		boardData.update((boardData) => {
			// Find the column that matches the status of the new issue
			const column = boardData.find((column) => column.status === data.status);

			// Find the issue that matches the id
			const issue = column?.issues.find((issue) => issue.id === data.id);

			// Update the issue
			if (issue) {
				issue.title = data.title;
				issue.description = data.description;
				issue.status = data.status;
				issue.deadline = data.deadline;
			}

			return boardData;
		});

		// Store the updated data in the local storage
		localStorageBoardData.update((localStorageBoardData) => {
			// Find the column that matches the status of the new issue
			const copyJSON = JSON.parse(localStorageBoardData);
			const column = copyJSON.find((column: BoardDataType) => column.status === data.status);

			// Find the issue that matches the id
			const issue = column?.issues.find((issue: IssueType) => issue.id === data.id);

			// Update the issue
			if (issue) {
				issue.title = data.title;
				issue.description = data.description;
				issue.status = data.status;
				issue.deadline = data.deadline;
			}

			// Replace the old issue with the updated issue
			column?.issues.splice(column.issues.indexOf(issue), 1, issue);

			return JSON.stringify(copyJSON);
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

		// Store the updated data in the local storage
		localStorageBoardData.update((localStorageBoardData) => {
			// Find the column that matches the status of the new issue
			const copyJSON = JSON.parse(localStorageBoardData);
			const column = copyJSON.find((column: BoardDataType) => column.status === data.status);

			// Add the new issue to the column
			column?.issues.push(data);

			return JSON.stringify(copyJSON);
		});

		// Reset the form
		resetForm(e);
	}

	// Add the issue

	// Add the new issue to the local storage
	// localStorageStore.update((localStoredData: string) => {
	// 	// Find the column that matches the status of the new issue
	// 	const column = JSON.parse(localStoredData).find((column: any) => column.status === status);

	// 	// Add the new issue to the column
	// 	column?.issues.push(data);

	// 	return localStoredData;
	// });
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
