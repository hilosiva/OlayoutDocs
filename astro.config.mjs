import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hilosiva.github.io",
  base: "/olayout-docs",
  integrations: [
    starlight({
      title: "OlayoutCSS",
      logo: {
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
        replacesTitle: true,
      },
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
            { label: "Responsive Design", link: "/guides/responsive-design/" },
            { label: "Functions", link: "/guides/functions/" },
          ],
        },
        {
          label: "Base Styles",
          items: [{ label: "Reset", link: "/base-styles/reset/" }],
        },
        {
          label: "Layout",
          autogenerate: { directory: "layout" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      components: {
        Footer: "./src/components/Footer.astro",
      },
      editLink: {
        baseUrl: "https://github.com/hilosiva/olayout-docs/edit/main/",
      },
      lastUpdated: true,
    }),
  ],
});
