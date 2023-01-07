<script>
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '@components/sidebar.svelte';
	import Footer from '@components/footer.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
