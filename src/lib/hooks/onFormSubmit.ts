import { boardData } from '@stores/stores';
import type { IssueType } from '@lib/types';

export const onFormSubmit = (
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	},
	id: string
) => {
	// Edit the issue
	if (id === 'edit') {
		// Get all the data from the form
		const formData = new FormData(e?.currentTarget);

		// Convert the form data to an object
		const data = Object.fromEntries(formData.entries()) as unknown as IssueType;

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
				issue.assignee = data.assignee;
				issue.deadline = data.deadline;
			}

			return boardData;
		});

		// Reset the form
		e.currentTarget.reset();

		return;
	}

	// Add the issue

	// Get all the data from the form
	const formData = new FormData(e?.currentTarget);

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

	// Convert the form data to an object
	const data = Object.fromEntries(formData.entries()) as unknown as IssueType;

	const status = data.status;

	// Add the new issue to the local storage
	// localStorageStore.update((localStoredData: string) => {
	// 	// Find the column that matches the status of the new issue
	// 	const column = JSON.parse(localStoredData).find((column: any) => column.status === status);

	// 	// Add the new issue to the column
	// 	column?.issues.push(data);

	// 	return localStoredData;
	// });

	// Add the new issue to the board data store
	boardData.update((boardData) => {
		// Find the column that matches the status of the new issue
		const column = boardData.find((column) => column.status === status);

		// Add the new issue to the column
		column?.issues.push(data);

		return boardData;
	});

	// Reset the form
	e.currentTarget.reset();
};
