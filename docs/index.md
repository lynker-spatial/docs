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

<Home>
  <Card title="Quickstart" href="/introduction">
    Jump into the capabilities offered within the Lynker Spatial platform.
  </Card>
  <Card title="Authentication" href="/data-service/authentication">
    Follow our guide to quickly setup an authenticated connection to our data services.
  </Card>
  <Card title="Hydroforecasts" href="/data-service/accessing-data">
    Explore the forecast data available in our data services.
  </Card>
  <Card title="Gridded" href="/data-service/gridded">
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
