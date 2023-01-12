<script lang="ts">
	import '../app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '@components/sidebar.svelte';
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';
</script>

<AppShell
	slotSidebarLeft=" dark:bg-black py-8 px-12 h-full "
	slotPageHeader="dark:bg-black  py-6 flex justify-between items-center "
	slotPageContent="dark:bg-black  overflow-hidden overflow-y-scroll "
>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<slot class="overflow-hidden" />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
