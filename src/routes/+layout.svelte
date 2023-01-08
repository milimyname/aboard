<script lang="ts">
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '@components/sidebar.svelte';
	import Footer from '@components/footer.svelte';
	import Header from '@components/header.svelte';
</script>

<AppShell>
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
