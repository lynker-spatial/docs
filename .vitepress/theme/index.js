// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => { return h(DefaultTheme.Layout, null, {}) },
  // enhanceApp({ app, router, siteData }) { }
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
