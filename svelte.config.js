import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer],
      },
    }),
  ],

  // auto adapter config
  adapter: adapter({
    pages: 'dist',
    assets: 'dist',
    fallback: false,
    precompress: false,
    strict: false,
  }),
};

export default config;
