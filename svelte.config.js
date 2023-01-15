import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		}),
		alias: {
			'@components': path.resolve('./src/components'),
			'@lib': path.resolve('./src/lib'),
			'@assets': path.resolve('./src/lib/assets'),
			'@stores': path.resolve('./src/stores')
		}
	}
};

export default config;
