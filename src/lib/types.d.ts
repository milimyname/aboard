export type Issue = {
	id: number;
	title: string;
	description: string;
	priority: string;
	assignee: string;
	labels: string[];
	colors: string[];
};

export type Columns = {
	id: string;
	name: string;
	items: Issue[];
};
