/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		// Keep existing values and append the following:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				'p-cyan': '#A6D1E6',
				'p-blue': '#2B3467'
			},
			gridTemplateColumns: {
				board: 'repeat(4, minmax(24rem, 1fr))'
			},
			fontFamily: {
				sans: ['Livvic', 'sans-serif']
			},
			screens: {
				'max-lg': { max: '1024px' },
				'max-md': { max: '768px' },
				'max-sm': { max: '375px' }
			}
		}
	},
	plugins: [
		// Keep any existing plugins present and append the following:
		require('@skeletonlabs/skeleton/tailwind/theme.cjs'),
		require('@tailwindcss/forms')
	]
};
