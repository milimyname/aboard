export type IssueType = {
	title: string;
	id: string;
	description: string;
	priority: string;
	assignee: string;
	label: string;
	deadline: string;
	status: string;
};

export type ColumnsType = {
	id: string;
	name: string;
	items: Issue[];
};

export type BoardDataType = {
	[key: number]: string | number;
	status: string;
	issues: IssueType[];
};
