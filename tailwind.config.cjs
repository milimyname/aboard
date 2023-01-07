/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Keep existing values and append the following:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// Keep any existing plugins present and append the following:
		require('@skeletonlabs/skeleton/tailwind/theme.cjs')
	]
};
