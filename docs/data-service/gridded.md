# Gridded Data

The Lynker Spatial Data Service streamlines the process of integrating cloud-native, gridded geospatial data into your analysis environment. The service provides three core pillars:

1. **A Federated Catalog**: Access to high-resolution geospatial climate, land cover, elevation, and National Water Model (NWM) resources.
2. **Spatial and Temporal Subsetting**: Tools for accessing remote gridded data bounded by space, time, and variable constraints, saving you from downloading massive global files. 
3. **Cloud-Native Formats**: Direct access to OPeNDAP, Zarr stores, and Cloud Optimized GeoTIFFs (COGs) that integrate seamlessly with modern data science workflows.

In addition to the rich [tile service](/data-service/tiles.md), you can also use the [ClimateR](https://github.com/mikejohnson51/climateR) and [ClimatePy](https://github.com/LynkerIntel/climatePy) packages to access data.

---

## Installation & Setup

Before interacting with the gridded data service, ensure your API authentication is configured properly. See the [Authentication](/data-service/authentication.html) page for details.

You can access the data service via Python (using our SDK or standard tools like `xarray`) or R (using `climateR`). 

:::::tabs
== Python

```python
pip install lynker-spatial geopandas xarray
```

== R

```r
remotes::install_github("mikejohnson51/AOI")
remotes::install_github("mikejohnson51/climateR")
```

:::::

## Basic Usage

The data service relies on a consistent access pattern. All spatial data aggregation and extraction requests must start with an Extent or Area of Interest (AOI).

### Defining Areas/Points of Interest

Before extracting any data, you must provide spatial bounds. For the examples below, we will use a polygon representing the state of Colorado, and a set of points representing cities.

:::::tabs
== Python

```python
import geopandas as gpd

# Load polygons and points
colorado = gpd.read_file("co_boundary.geojson")
cities = gpd.read_file("co_cities.geojson")

== R

```r
library(climateR)
library(AOI)

colorado = aoi_get(state = "CO", county = "all")
cities = readRDS(system.file("co/cities_colorado.rds", package = "climateR"))
```

:::::

### Extent Extraction

The default behavior of the service is to request a 2D or 3D gridded subset (e.g., an xarray.Dataset or a SpatRaster) for the bounding box of the passed AOI, regardless of whether it is a POINT or POLYGON dataset.

:::::tabs

== Python

```python
from lynker_spatial import GriddedClient

client = GriddedClient()

# Request Data for Colorado (POLYGON)
gridmet_pr = client.get_dataset(
    dataset="gridmet", 
    aoi=colorado, 
    varname="pr", 
    start_date="2023-10-01", 
    end_date="2023-10-07"
)

# Returns an xarray dataset
print(gridmet_pr)
```

== R

```r
# Request Data for Colorado (POLYGON)
gridmet_pr = getGridMET(
    AOI = colorado, 
    varname = "pr", 
    startDate = "2023-10-01", 
    endDate = "2023-10-07"
)
```

:::::

### Single Point Extraction (Time Series)

The exception to the extent-extraction rule is if the AOI is a single point. Because the extent of a single point means {xmax = xmin} and {ymax = ymin}, the service skips the spatial grid and directly returns a 1D time series of the intersecting cell.

:::::tabs

== Python

```python
# Select a single city point
single_city = cities.iloc[[0]]

city_ts = client.get_dataset(
    dataset="maca",
    aoi=single_city,
    varname="tasmax",
    start_date="2050-10-01",
    end_date="2050-10-07"
)

# Returns a pandas DataFrame time series
print(city_ts.head())
```

== R

```r
# Request data for a single city
future_city = getMACA(
    AOI = cities[1,], 
    varname = "tasmax", 
    startDate = "2050-10-01", 
    endDate = "2050-10-07"
)

head(future_city)
```

:::::

### Unit-Based Extraction & Zonal Statistics

While the default behavior extracts data by bounding extent, there are cases where your input AOI is a set of discrete units (e.g., catchments, counties) that you want to summarize (mean, max, min, etc.).

By passing a uniquely identifying column (ID), you can trigger the service to extract data by unit on the fly. This easily bridges the gap between raw gridded data and the Hydrofabric.

:::::tabs

== Python

```python
# Extract mean precipitation for each individual county
county_summaries = client.get_zonal_stats(
    dataset="chirps",
    aoi=colorado,         # Multiple county polygons
    varname="precip",
    start_date="2023-10-01",
    end_date="2023-10-07",
    id_column="fips_code",
    stat="mean"
)

print(county_summaries)
```

== R

```r
library(zonal)

# Using climateR piped directly into zonal summary
county_summaries = getCHIRPS(
    AOI = colorado, 
    varname = "precip", 
    startDate = "2023-10-01", 
    endDate = "2023-10-07"
) |> 
execute_zonal(geom = colorado, fun = "mean", ID = "fips_code")
```

:::::


## The Tiles marketplace

The [tiles marketplace quickstart](/data-service/tiles.md) provides more information on how to access to geospatial tile data useful for watershed analysis, flood mapping, land cover classification, and more.  For even more information on how you can use these tiles within your development workflows, see the [marketplace quickstart](https://tiles.lynker-spatial.com/docs/index.html#getting-started) for more detailed information on how to use that data within your favored application, be it a GUI driven GIS environment such as ArcGIS or QGIS, code environments such as R and Python, or any of the most popular web mapping platforms like MapLibre or Leaflet.