import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

export function onAdd() {
	const settings: DrawerSettings = {
		id: 'demo',
		// Provide your prop overrides
		position: 'left',
		bgDrawer: 'bg-white',
		bgBackdrop: 'bg-primary-500/50',
		meta: { foo: 'bar', fizz: 'buzz', age: 40 },
		width: '100%',
	};
	drawerStore.open(settings);
}
