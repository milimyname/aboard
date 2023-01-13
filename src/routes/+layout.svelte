<script lang="ts">
	import '../app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '@components/sidebar.svelte';
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	onMount(() => {
		// document.getElementById('page')?.classList.remove('overflow-x-hidden');
		// document.getElementById('page')?.classList.remove('overflow-y-auto');
		// document.getElementById('page')?.classList.add('scrollbar-none');
	});
</script>

<AppShell
	slotSidebarLeft=" dark:bg-black py-8 px-12 h-full "
	slotPageHeader="dark:bg-black  py-6 flex justify-between items-center max-w-[90vw]"
	slotPageContent="dark:bg-black grid grid-cols-board gap-x-10 overflow-x-scroll"
	slotPageFooter="dark:bg-black dark:text-white p-4"
>
	<Drawer>
		{#if $drawerStore.id === 'demo'}
			<p class="p-6">(show 'example-1' contents)</p>
		{:else if $drawerStore.id === 'example-2'}
			<p>(show 'example-2' contents)</p>
		{:else}
			<p>(fallback contents)</p>
		{/if}
	</Drawer>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
