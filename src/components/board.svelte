<script lang="ts">
	import { PlusCircle, AlignRight } from 'lucide-svelte';
	import Issue from '@components/issue.svelte';
	import { flip } from 'svelte/animate';

	let boardData = [
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
	];

	function drop(event: any, columnIndex: number) {
		const data = JSON.parse(event.dataTransfer.getData('text'));
		const { issueIndex, oldColumnIndex } = data;
		const issue = boardData[oldColumnIndex].issues[issueIndex];

		// remove the issue from the old column
		boardData[oldColumnIndex].issues = boardData[oldColumnIndex].issues.filter(
			(_, index) => index !== issueIndex
		);
		boardData[columnIndex].issues.push(issue);
	}
</script>

{#each boardData as column, columnIndex (column)}
	{@const capitalizedFirstLetter = column.title[0].toUpperCase() + column.title.slice(1)}
	<section class="snap-center sticky overflow-hidden" animate:flip>
		<div class="flex items-center justify-between ">
			<div class="flex items-center gap-4">
				<h3 class="text-lg text-gray-400">{capitalizedFirstLetter}</h3>
				<span class="font-medium">
					({column.issues.length})
				</span>
			</div>
			<div class="flex gap-4">
				<PlusCircle size={20} />
				<AlignRight size={20} />
			</div>
		</div>
		<!-- Card -->
		<div
			on:drop|preventDefault={(event) => drop(event, columnIndex)}
			on:dragover|preventDefault
			class="h-full"
		>
			{#each column.issues as issue, issueIndex (issue)}
				<Issue {...issue} {columnIndex} {issueIndex} />
			{/each}
		</div>
	</section>
{/each}
