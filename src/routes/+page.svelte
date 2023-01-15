<script lang="ts">
	import { PlusCircle, AlignRight } from 'lucide-svelte';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	import { flip } from 'svelte/animate';
	import Issue from '@components/issue.svelte';
	import { boardData } from '@stores/stores';
	import { onDrop } from '@lib/hooks/onDrop';
	import { onAdd } from '@lib/hooks/onAdd';
</script>

{#each $boardData as column, columnIndex (column)}
	{@const capitalizedFirstLetter = column.status[0].toUpperCase() + column.status.slice(1)}
	<section class="overflow-x-hidden scrollbar-hidden">
		<div
			class="flex items-center justify-between sticky top-0 px-4 py-2 rounded-sm z-10 {`${
				$storeLightSwitch ? 'bg-p-blue' : 'bg-black'
			}`}"
		>
			<div class="flex items-center gap-4">
				<h3 class="text-lg {`${$storeLightSwitch ? 'text-white' : 'text-white'}`}">
					{capitalizedFirstLetter}
				</h3>
				<span class="font-medium  {`${$storeLightSwitch ? 'text-white' : 'text-white'}`}">
					({column.issues.length})
				</span>
			</div>
			<div class="flex gap-4">
				<button on:click={onAdd} class="outline-none">
					<PlusCircle size={20} color="#fff" />
				</button>
				<AlignRight size={20} color="#fff" />
			</div>
		</div>
		<!-- Card -->
		<div
			on:drop|preventDefault={(e) => onDrop(e, columnIndex)}
			on:dragover|preventDefault
			class="h-full"
		>
			{#each column.issues as issue, issueIndex (issue)}
				<div animate:flip>
					<Issue {...issue} {columnIndex} {issueIndex} />
				</div>
			{/each}
		</div>
	</section>
{/each}
