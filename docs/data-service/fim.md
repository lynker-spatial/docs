# FIM in FloodFabric:

[![](/img/floodfabric_hero.png)](https://floodfabric.lynker-spatial.com/)

## Background:

As a confluence of domains, Flood Inundation Mapping (FIM) borrows workflows and terminologies across several different disciplines, and a shared vocabulary is critical to being able to efficiently communicate the choices and distinctions between the various ways we map a flood.  Here we'll outline the critical ones we've exposed in the .

Flood Inundation Mapping (FIM) sits at the confluence of several domains, borrowing workflows and terminology from multiple disciplines. A shared vocabulary is critical to effectively communicate the distinctions and choices involved in various mapping methods. This section outlines the core concepts integrated into the [FloodFabric application](https://floodfabric.lynker-spatial.com/).

### Library terminology:

A **FIM library** denotes a specific database. These databases are composed of and partitioned into individual units referred to as **volumes**. FloodFabric harmonizes these varied volumes into distinguishable flood library access patterns, which are selectable via the menu on the left side of the dashboard.  Currently,you can select the [National Water Model HAND libraries](https://github.com/NOAA-OWP/inundation-mapping) and forecasts from the [National Water Model](https://water.noaa.gov/about/nwm) or the AWI water model.  You can also look at historic events, or flood predictions based on the NWM Hindcast.  Check out the [Hydro-intel scorecards](https://hydro-intel.lynker-spatial.com/) or see the [quickstart](/data-service/accessing-data.md) for more details.

### Library access patterns:

You can access a FIM library in a number of ways.  FloodFabric exposes discharge-based access patterns leaning on the [FlowFabric API](https://flowfabric-api.lynker-spatial.com/) and model outputs. Want to see FloodFabric implemented specifically for your area? Please [reach out](https://lynker-spatial.com/#contact)!