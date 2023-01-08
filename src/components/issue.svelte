<script lang="ts">
	// @ts-ignore
	import HighPriority from '@assets/high-priority.svg';
	// @ts-ignore
	import MediumPriority from '@assets/low-priority.svg';
	// @ts-ignore
	import LowPriority from '@assets/medium-priority.svg';
	import Button from '@components/button.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let title: string;
	export let description: string;
	export let priority: string;
	export let assignee: string;
	export let labels: string[];
	export let colors: string[];

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

<div class="bg-white rounded-lg shadow-sm p-4 mt-4 border-2 border-black min-h-52">
	<div class="flex justify-between mb-6">
		<div>
			<h2 class="text-xl font-medium">{title}</h2>
			<p class="text-sm ">{description}</p>
		</div>
		<img src={priorityIcon} alt="High Priority" class="w-6 h-6" />
	</div>
	<div class="flex justify-between">
		<div class="flex gap-4">
			{#each labels as label, i}
				<Button text={label} color={colors[i]} />
			{/each}
		</div>
		<Avatar src={assignee} width="w-12" />
	</div>
</div>
