<script lang="ts">
	// @ts-ignore
	import HighPriority from '@assets/high-priority.svg';
	// @ts-ignore
	import MediumPriority from '@assets/low-priority.svg';
	// @ts-ignore
	import LowPriority from '@assets/medium-priority.svg';
	import Button from '@components/button.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onDragStart } from '@lib/hooks/onDragStart';
	import { onClickIssue } from '@lib/hooks/onClickIssue';

	export let title: string;
	export let id: string;
	export let priority: string;
	export let status: string;
	export let description: string;
	export let assignee: string;
	export let label: string;
	export let deadline: string;

	export let columnIndex: number;
	export let issueIndex: number;

	// Logic for priority
	let priorityIcon: string;

	$: {
		if (priority === 'high') {
			priorityIcon = HighPriority;
		} else if (priority === 'medium') {
			priorityIcon = MediumPriority;
		} else if (priority === 'low') {
			priorityIcon = LowPriority;
		}
	}
</script>

<div
	class="bg-white rounded-lg shadow-sm p-4 mt-4 border-2 border-black min-h-52 cursor-pointer dragging"
	draggable={true}
	on:dragstart={(event) => onDragStart(event, columnIndex, issueIndex)}
	on:dragend={(event) => {
		event.currentTarget.classList.remove('blur-sm');
	}}
	on:click={() => onClickIssue(id)}
	on:keypress|preventDefault
>
	<div class="flex justify-between mb-6">
		<div>
			<h2 class="text-xl font-medium">{title}</h2>
			<p class="text-sm ">{id}</p>
		</div>
		<img src={priorityIcon} alt="High Priority" class="w-6 h-6" />
	</div>
	<div class="flex justify-between">
		<div class="flex gap-4">
			<Button text={label} />
			<Button text={deadline} />
		</div>
		<Avatar src={assignee} width="w-12" />
	</div>
</div>
