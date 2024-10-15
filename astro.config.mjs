import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://alssdev.github.io',
  base: '/cc8-rfc1',
  integrations: [
    starlight({
      title: 'CCVIII - Capa física',
      sidebar: [
        // A link to a non-docs page on this site.
        { slug: '' },
        { slug: 'terminology' },
        { slug: 'concepts' },
        { slug: 'frame' },
        {
          label: 'Tutoriales',
          items: [
            { slug: 'guides/wire' },
          ]
        },
        { slug: 'ids' },
        { slug: 'gratitude' },
      ],
    })
  ]
});
