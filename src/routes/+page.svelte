<script lang="ts">
	import Board from '@components/board.svelte';
</script>

<!-- Kanban Board -->
<div
	class="grid grid-cols-board gap-x-10 overflow-x-scroll scroll-smooth snap-x  h-full min-w-full"
>
	<Board />
</div>
