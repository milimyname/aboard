import { writable } from 'svelte/store';
import type { BoardDataType } from '@lib/types';

export const disabled = writable(false);

export const boardData = writable<BoardDataType[]>([
	{
		title: 'backlog',
		issues: [
			{
				title: 'Create a new Kanban board',
				description: 'TP222',
				priority: 'high',
				assignee: 'https://avatars.githubusercontent.com/u/46004116?v=4',
				labels: ['feature', 'in a day']
			}
		]
	},
	{
		title: 'in progress',
		issues: [
			{
				title: 'Refactor the code',
				description: 'LK22',
				priority: 'high',
				assignee: 'https://avatars.githubusercontent.com/u/13323999?v=4',
				labels: ['feature', 'in a day']
			}
		]
	},
	{
		title: 'pending',
		issues: [
			{
				title: 'Create a new post for the blog',
				description: 'LL11',
				priority: 'medium',
				assignee: 'https://avatars.githubusercontent.com/u/3233333?v=4',
				labels: ['feature', 'in a day']
			}
		]
	},
	{
		title: 'done',
		issues: [
			{
				title: 'Create a new post for the blog',
				description: 'LL11',
				priority: 'medium',
				assignee: 'https://avatars.githubusercontent.com/u/3233333?v=4',
				labels: ['feature', 'in a day']
			}
		]
	}
]);
