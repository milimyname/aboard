import { boardData } from '@stores/stores';
import type { IssueType, BoardDataType } from '@lib/types';

export function onDrop(
	event: DragEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	},
	columnIndex: number
) {
	// Return event dataTransfer if null
	if (!event.dataTransfer?.getData('text')) return;

	// Subscribe boardData to currentBoardData
	let currentBoardData: BoardDataType[] = [];
	boardData.subscribe((value) => (currentBoardData = value));

	// Get Data from DropStart
	const data = JSON.parse(event.dataTransfer?.getData('text'));
	const {
		issueIndex,
		oldColumnIndex
	}: {
		issueIndex: number;
		oldColumnIndex: number;
	} = data;

	// Find the issue

	const issue: IssueType = currentBoardData[oldColumnIndex].issues[issueIndex];

	// Remove the issue from the old column
	currentBoardData[oldColumnIndex].issues = currentBoardData[oldColumnIndex].issues.filter(
		(_, index: number) => index !== issueIndex
	);

	// Update the boardData
	currentBoardData[columnIndex].issues.push(issue);

	// Set the boardData to currentBoardData
	boardData.set(currentBoardData);
}
