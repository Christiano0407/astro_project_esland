import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// en => / es => /es (Language)
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});