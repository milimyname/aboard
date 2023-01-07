<script>
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../lib/components/sidebar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
