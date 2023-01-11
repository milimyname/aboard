<script lang="ts">
	import { PlusCircle, AlignRight } from 'lucide-svelte';
	import Issue from '@components/issue.svelte';
	import { flip } from 'svelte/animate';
	import { boardData } from '@stores/stores';
	import { onDrop } from '@lib/hooks/onDrop';

	// Set issue data
</script>

{#each $boardData as column, columnIndex (column)}
	{@const capitalizedFirstLetter = column.title[0].toUpperCase() + column.title.slice(1)}
	<section class="snap-center sticky overflow-hidden">
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
