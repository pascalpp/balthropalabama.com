import adapter from '@sveltejs/adapter-vercel';
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

  kit: {
    prerender: {
      handleMissingId: 'ignore',
    },

    // vercel adapter config
    adapter: adapter({
      // Vercel adapter options
    }),
  },
};

export default config;
