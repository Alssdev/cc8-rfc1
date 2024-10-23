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
        {
          label: 'NUEVOS CAMBIOS',
          items: [
            { label: '22 Oct - Tamaño variables de frames', slug: 'changes/20241022' },
            { label: '22 Oct - Recuperación de Checksum Errors', slug: 'changes/20241022_2' },
          ]
        },
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
