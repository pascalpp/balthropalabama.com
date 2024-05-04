import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
  plugins: [
    sveltekit(),
    svg(),
    // svelteSVG({
    //   svgoConfig: {
    //     precision: 3,
    //     plugins: [
    //       {
    //         name: 'preset-default',
    //         params: {
    //           overrides: {
    //             removeViewBox: false,
    //           },
    //         },
    //       },
    //       'removeDimensions',
    //     ],
    //   },
    //   requireSuffix: true,
    // }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  define: {
    'process.env': {},
  },
});
