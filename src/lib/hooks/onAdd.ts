import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

export function onAdd() {
	const settings: DrawerSettings = {
		id: 'add',
		position: 'left',
		bgDrawer: 'bg-white',
		blur: 'backdrop-blur-sm',
		rounded: 'rounded-r-md',
		width: 'w-1/3'
	};
	drawerStore.open(settings);
}
