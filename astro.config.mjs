// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical origin — used for canonical/OG/hreflang tags and the sitemap.
// TODO: replace CHANGEME with the real workers.dev subdomain before deploy.
const SITE = "https://olbios.CHANGEME.workers.dev";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: "en",
    locales: ["tr", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", tr: "tr" } },
      changefreq: "monthly",
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        // Rank pages: home highest, project index next, detail pages below.
        const path = new URL(item.url).pathname.replace(/\/$/, "") || "/";
        if (path === "/" || path === "/tr") {
          item.priority = 1.0;
        } else if (path === "/projects" || path === "/tr/projects") {
          item.priority = 0.8;
          item.changefreq = "weekly";
        } else {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      display: "swap",
      name: "Bricolage Grotesque",
      cssVariable: "--font-brico",
      weights: ["200 800"],
    },
    {
      provider: fontProviders.fontsource(),
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      display: "swap",
      name: "Newsreader",
      cssVariable: "--font-news",
      weights: ["400 700"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
