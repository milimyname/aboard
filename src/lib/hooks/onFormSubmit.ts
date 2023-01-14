import { boardData } from '@stores/stores';
import type { IssueType } from '@lib/types';

export const onFormSubmit = (
	e: SubmitEvent & {
		currentTarget: EventTarget & HTMLFormElement;
	}
) => {
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
