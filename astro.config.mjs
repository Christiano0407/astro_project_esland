import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// en => / es => /es (Language)
export default defineConfig({
  integrations: [tailwind()], 
  i18n: {
    defaultLocale: 'en', 
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});