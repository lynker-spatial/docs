import path from "node:path";
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  assetsDir: "assets",

  // Metadata
  lang: "en-US",
  title: "Lynker Spatial",
  description: "Documentation",

  head: [
    ["link", { rel: "icon", type: "image/webp", href: "/assets/img/favicon.webp" }]
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: "/assets/img/logo-light.svg",
      dark: "/assets/img/logo-dark.svg",
      alt: "Lynker Spatial",
    },

    nav: [
      { text: "Docs Home", link: "/" },
    ],

    sidebar: [
      { text: "Docs Home", link: "https://docs.lynker-spatial.com/" },
      {
        text: "Data Service",
        items: [
          { text: "Authentication", link: "/data-service/authentication" },
          { text: "Hydro Forecasts", link: "/data-service/accessing-data" },
          { text: "Gridded Data", link: "/data-service/gridded" },
          { text: "Hydrofabric", link: "/data-service/hydrofabric" },
          { text: "FIM", link: "/data-service/fim" },
          { text: "Map Tiles", link: "/data-service/tiles" },
        ]
      }
    ],

    footer: {
      copyright: '© 2026 <a href="https://www.lynker-spatial.com">Lynker Spatial</a>'
    },

    socialLinks: [
      {
        "icon": {
          "svg": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" /><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" /></svg>'
        },
        "link": "https://lynker-spatial.com/#top"
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c1.058 0 2.04.2 2.933.565a.75.75 0 001-.707V4.362a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>'
        },
        link: "https://scholar.google.com/citations?hl=en&tzom=360&user=ZrFjZNBxr_YC"
      },
      { icon: "github", link: "https://github.com/lynker-spatial" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>'
        },
        link: "mailto:info@lynker-spatial.com"
      }
    ],

    search: {
      provider: "local"
    },
    lastUpdated: true
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./theme")
      }
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  }
})
