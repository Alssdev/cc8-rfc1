import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://alssdev.github.io',
  base: '/cc8-rfc1',
  integrations: [starlight({
    title: 'CCVIII - Capa física'
  })]
});
