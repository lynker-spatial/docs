import path from "node:path";
import { defineConfig } from "vitepress";

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
      { text: "Home", link: "/" },
    ],

    sidebar: [
      { text: "Introduction", link: "/introduction" },
      {
        text: "Data Service",
        items: [
          { text: "Authentication", link: "/data-service/authentication" }
        ]
      }
    ],

    footer: {
      copyright: '© 2025 <a href="https://www.lynker-spatial.com">Lynker Spatial</a>'
    },

    socialLinks: [
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
  }
})
