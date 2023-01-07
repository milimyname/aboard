import { writable } from 'svelte/store';

export const config = writable({
	disabled: false,
	theme: 'light'
});
