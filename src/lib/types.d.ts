export type IssueType = {
	title: string;
	description: string;
	priority: string;
	assignee: string;
	labels: string[];
};

export type ColumnsType = {
	id: string;
	name: string;
	items: Issue[];
};

export type BoardDataType = {
	[key: number]: string | number;
	title: string;
	issues: {
		title: string;
		description: string;
		priority: string;
		assignee: string;
		labels: string[];
	}[];
};
