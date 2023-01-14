import { writable } from 'svelte/store';
import type { BoardDataType, IssueType } from '@lib/types';

export const disabled = writable(false);

export const boardData = writable<BoardDataType[]>([
	{
		status: 'backlog',
		issues: [
			{
				title: 'Create a new Kanban board',
				id: 'TP222',
				priority: 'high',
				assignee: 'https://avatars.githubusercontent.com/u/46004116?v=4',
				label: 'feature',
				deadline: '2021-08-01',
				description: 'Create a new Kanban board',
				status: 'backlog'
			}
		]
	},
	{
		status: 'in progress',
		issues: [
			{
				title: 'Refactor the code',
				id: 'LK22',
				priority: 'high',
				assignee: 'https://avatars.githubusercontent.com/u/13323999?v=4',
				label: 'feature',
				deadline: '2021-08-01',
				description: 'Refactor the code',
				status: 'in progress'
			}
		]
	},
	{
		status: 'pending',
		issues: [
			{
				title: 'Create a new post for the blog',
				id: 'LL11',
				priority: 'medium',
				assignee: 'https://avatars.githubusercontent.com/u/32333?v=4',
				label: 'feature',
				deadline: '2021-08-01',
				description: 'Create a new post for the blog',
				status: 'pending'
			}
		]
	},
	{
		status: 'done',
		issues: [
			{
				title: 'Create a new post for the blog',
				id: 'LL11',
				priority: 'medium',
				assignee: 'https://avatars.githubusercontent.com/u/3233333?v=4',
				label: 'feature',
				deadline: '2021-08-01',
				description: 'Create a new post for the blog',
				status: 'done'
			}
		]
	}
]);

export const currentStatus = writable<string>('');
