import type { BoardDataType, IssueType } from '@lib/types';
import { drawerStore } from '@skeletonlabs/skeleton';
import { boardData } from '@stores/stores';

export function onClickIssue(id: string) {
	let data: BoardDataType[] = [];
	let issue: IssueType | undefined;
	boardData.subscribe((boardData) => (data = boardData));

	// Find the issue that matches the id
	data.forEach((column) => {
		const foundIssue = column.issues.find((issue) => issue.id === id);
		if (foundIssue) issue = foundIssue;
	});

	// Open the drawer
	drawerStore.open({
		position: 'left',
		bgDrawer: 'bg-white',
		blur: 'backdrop-blur-sm',
		rounded: 'rounded-r-md',
		width: 'w-1/4 max-lg:w-8/12 max-md:w-10/12',
		id: 'edit',
		meta: issue
	});
}
