import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hilosiva.github.io",
  base: "/olayout-docs",
  integrations: [
    starlight({
      title: "OlayoutCSS",
      social: {
        github: "https://github.com/hilosiva/OlayoutCSS",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", link: "/installation/" },
            { label: "Browser Support", link: "/browser-support/" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Configuration", link: "/guides/configuration/" },
            { label: "Base Styles", link: "/guides/base-styles/" },
            { label: "Media Queries", link: "/guides/media-queries/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/hilosiva/olayout-docs/edit/main/",
      },
      lastUpdated: true,
    }),
  ],
});
