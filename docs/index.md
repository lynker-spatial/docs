---
layout: home

# hero:
#   name: "Lynker Spatial"
#   text: "Documentation"
#   actions:
#     - theme: brand
#       text: Get Started
#       link: /introduction
#     - theme: alt
#       text: GitHub
#       link: https://github.com/lynker-spatial
---

<script setup>
import Home from "@/components/Home.vue";
import Card from "@/components/Card.vue";
</script>

<a href="https://lynker-spatial.com/#top">
  <img src="/assets/img/logo-light.svg" class="logo-light-mode" style="width: 100vw;" alt="Lynker Spatial Logo" />
  <img src="/assets/img/logo-dark.svg" class="logo-dark-mode" style="width: 100vw;" alt="Lynker Spatial Logo" />
</a>

<style>
/* Default to light mode: hide the logo meant for dark mode */
html:not(.dark) .logo-dark-mode {
  display: none;
}

/* Dark mode: hide the logo meant for light mode */
html.dark .logo-light-mode {
  display: none;
}
</style>

> This documentation covers the principal utilities and offerings of [Lynker Spatial](https://lynker-spatial.com/#top). These resources are under active development; please check back often to see what's new!

## For the Public

The core mission of the Lynker Spatial team is to help you make better-informed decisions. Whether you are focused on flood forecasting, water intelligence, or geospatial asset management, our offerings provide the real-time data necessary to anticipate risk. 

If you are exploring our capabilities or need immediate insights, we provide several open-access landing pages tailored to specific needs:

* **[Hydrofabric Viewer](https://hydrofabric.lynker-spatial.com/):** Contextualize your location within the broader National Water Forecasting enterprise.
* **[Hydro-Intelligence Scorecards](https://hydro-intel.lynker-spatial.com/):** Evaluate and select the models and forecasts that best suit your requirements.
* **[FloodFabric Dashboard](https://floodfabric.lynker-spatial.com/):** Access front-and-center flood predictions to remove the guesswork when determining if infrastructure, such as buildings or roadways, is at risk of inundation.

These tools are free, open-source, and interactive, allowing you to build a strategy tailored to your specific risk tolerance. If these applications spark a new idea or if you require a custom solution, please [reach out to the Lynker Spatial team](https://lynker-spatial.com/#contact) to see what we can build together with you.

## For Power Users and Developers

The Lynker Spatial platform provides a foundational ecosystem for building and extending your own applications. By leveraging our data and infrastructure, developers can integrate high-level intelligence into their own workflows.

* **[FlowFabric API and Packages](https://flowfabric-api.lynker-spatial.com/):** Access our core data seamlessly using programmatic patterns and dedicated libraries.
* **[Geospatial Tile Marketplace](https://tiles.lynker-spatial.com/):** Connect to high-performance, ready-to-use geospatial datasets.

If you have specific data needs, use cases, or applications you would like to see implemented, [reach out to the team](https://lynker-spatial.com/#contact) to discuss collaboration.

<Home>

  <Card title="Authentication" href="/data-service/authentication">
    Follow our guide to quickly setup an authenticated connection to our data services.
  </Card>
  <Card title="Hydroforecasts" href="/data-service/accessing-data">
    Explore the forecast data available in our data services.
  </Card>
  <Card title="Gridded Data" href="/data-service/gridded">
    Explore the gridded data available in our data services.
  </Card>
  <Card title="Hydrofabric" href="/data-service/hydrofabric">
    Explore the hydrofabric data available in our data services.
  </Card>
  <Card title="FIM" href="/data-service/fim">
    Explore the flood inundation data available in our data services.
  </Card>
  <Card title="Tile Visualization" href="/data-service/tiles">
    Explore the tile visualization data available in our data services.
  </Card>

</Home>