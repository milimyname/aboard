<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import { PlusCircle, AlignRight } from 'lucide-svelte';
	import Issue from '@components/issue.svelte';
	import { flip } from 'svelte/animate';

	const columns = ['backlog', 'in progress', 'pending', 'done'];

	let issues = [
		{
			title: 'Create a new Kanban board',
			description: 'TP222',
			priority: 'high',
			assignee: 'https://avatars.githubusercontent.com/u/46004116?v=4',
			labels: ['feature', 'in a day'],
			colors: ['green', 'black'],
			status: 'backlog'
		},
		{
			title: 'Refactor the code',
			description: 'LK22',
			priority: 'high',
			assignee: 'https://avatars.githubusercontent.com/u/13323999?v=4',
			labels: ['feature', 'in a day'],
			colors: ['green', 'black'],
			status: 'backlog'
		},
		// Other issue
		{
			title: 'Create a new post for the blog',
			description: 'LL11',
			priority: 'medium',
			assignee: 'https://avatars.githubusercontent.com/u/3233333?v=4',
			labels: ['feature', 'in a day'],
			colors: ['green', 'black'],
			status: 'backlog'
		}
	];
</script>

{#each columns as title, index (title)}
	{@const capitalizedFirstLetter = title[0].toUpperCase() + title.slice(1)}
	<section class="snap-center" animate:flip>
		<div class="flex items-center justify-between ">
			<div class="flex items-center gap-4">
				<h3 class="text-lg text-gray-400">{capitalizedFirstLetter}</h3>
				<span class="font-medium">({'3'})</span>
			</div>
			<div class="flex gap-4">
				<PlusCircle size={20} />
				<AlignRight size={20} />
			</div>
		</div>
		<!-- Card -->
		{#each issues as issue}
			{#if issue.status === title}
				<Issue {...issue} />
			{/if}
		{/each}
	</section>
{/each}
