import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

export function onAdd() {
	const settings: DrawerSettings = {
		id: 'add',
		position: 'left',
		bgDrawer: 'bg-white',
		blur: 'backdrop-blur-sm',
		rounded: 'rounded-r-md',
		width: 'w-1/4 max-lg:w-8/12 max-md:w-10/12'
	};
	drawerStore.open(settings);
}
