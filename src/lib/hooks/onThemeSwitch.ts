import { storePrefersDarkScheme, storeLightSwitch } from '@skeletonlabs/skeleton';

export function onThemeSwitch() {
	// Subscribe theme from store to currentTheme

	// Subscribe storePrefersDarkScheme from store to currentPrefersDarkScheme
	storePrefersDarkScheme.subscribe((value) => console.log(value));
}
