<script lang="ts">
	import '../app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell, drawerStore } from '@skeletonlabs/skeleton';
	import Sidebar from '@components/sidebar.svelte';
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';
	import { Drawer } from '@skeletonlabs/skeleton';
	import Form from '@components/form.svelte';
</script>

<AppShell
	slotSidebarLeft=" dark:bg-black py-8 px-12 h-full max-lg:hidden"
	slotPageHeader="dark:bg-black  py-6 flex justify-between items-center max-lg:px-12 max-md:px-4 max-sm:px-2"
	slotPageContent="dark:bg-black grid grid-cols-board gap-x-10 overflow-x-scroll max-lg:px-12 max-md:px-4 max-sm:px-2 scrollbar-hidden-fx scrollbar-hidden-ie"
	slotPageFooter="dark:bg-black dark:text-white p-4 max-lg:px-12 max-md:px-4 max-sm:px-2"
>
	<Drawer>
		{#if $drawerStore.id === 'add'}
			<Form />
		{/if}
		{#if $drawerStore.id === 'edit'}
			<Form content={$drawerStore.meta} id={$drawerStore.id} />
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
