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

[<img src="/assets/img/logo-dark.svg" style="width: 100vw;" alt="Lynker Spatial Logo" />](https://lynker-spatial.com/#top)

> These docs covers the principal utilities and offerings of the [lynker spatial](https://lynker-spatial.com/#top).  These are all in very active development so check back often to see what's new!

## For the Public

The core objective of the Lynker Spatial team is to help you build a better decision.  Wheather it's for flood forecasting, water intelligence, or geospatial asset managment, if you need to make an informed decision built on real-time data, the Lynker spatial offerings are here to facilitate that.  If you are just exploring or need a quick helper to better anticipate the risks you face, there are several open and acessable landing pages built spesifically for your needs.  These include:

* The [Hydrofabric Viewer](https://hydrofabric.lynker-spatial.com/), which will help you better place your location in context with the National Water Forecasting enterprise
* The [Hydro-Intelligence Scorecards](https://hydro-intel.lynker-spatial.com/), which helps you find the model and forecast that is right for you.
* The [FloodFabric Dashboard](https://floodfabric.lynker-spatial.com/), which places the flood prediction front and center and helps remove the guesswork assosiated with determining wheater your building or roadway are in danger of inundationg.  

All of these tools are free, open, graphical, and interactive, allowing you to quickly build a more informed strategy specific to your level of risk tolerance.  If these applications spark inspiration or if you want a customized solution tailored specifically for your use cases, we are here to help.  Please, [reach out to the Lynker Spatial team](https://lynker-spatial.com/#contact) to see what we can build with you together!

## For Power Users and Developers

The Lynker spatial platform is built to enable a common starting point off which you can build your own applications and create your own applications, extending on our data and platforms.  The Data Platform provides authenticated access to the vast datastores that power the intellegence Lynker Spatial provides.  

* Use the [FlowFabric API and Packages](https://flowfabric-api.lynker-spatial.com/), to faciltate seamless access to those data using programatic patterns.
* Use the [geospatial tile marketplace](https://tiles.lynker-spatial.com/) for access to useful and usable geospataial datasets.  

[Reach out to the team](https://lynker-spatial.com/#contact) if you have data, use cases, or applications you'd like to see implemented!

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