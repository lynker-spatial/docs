# Accessing S3 Data

**One Hour Short Range (All)**
```python
import time
import xarray as xr
import dask

uri = "https://data.lynker-spatial.com/nwm/short_range/2025090214.zarr"

# Read Zarr metadata
start_metadata = time.time()
ds = xr.open_dataset(uri, engine="zarr", chunks="auto")
end_metadata = time.time()
#> 0.514 seconds

# Read Zarr data into memory from remote
start_memory = time.time()
ds_mem = ds.load()
end_memory = time.time()
#> 1.074 seconds

ds_mem
#> <xarray.Dataset> Size: 422MB
#> Dimensions:        (init_time: 1, forecast_time: 18, feature_id: 2776734)
#> Coordinates:
#>   * init_time      (init_time) datetime64[ns] 8B 2025-09-02T14:00:00
#>   * forecast_time  (forecast_time) datetime64[ns] 144B 2025-09-02T15:00:00 .....
#>   * feature_id     (feature_id) int64 22MB 101 179 181 ... 1180001803 1180001804
#> Data variables:
#>     streamflow     (init_time, forecast_time, feature_id) float64 400MB 0.17 ...
```

```python
import time
import xarray as xr
import dask

reaches = [
    19305037,
    6965985,
    7099221,
    7718494,
    17168682,
    20073165,
    7558203,
    7318248,
    2330279,
    24423427
]

# --- Short Range ---
uri = "https://data.lynker-spatial.com/nwm/short_range/2025090214.zarr"
start = time.time()
ds = xr.open_dataset(uri, engine="zarr", chunks="auto")
#> <xarray.Dataset> Size: 422MB
#> Dimensions:        (init_time: 1, forecast_time: 18, feature_id: 2776734)
#> Coordinates:
#>   * init_time      (init_time) datetime64[ns] 8B 2025-09-02T14:00:00
#>   * forecast_time  (forecast_time) datetime64[ns] 144B 2025-09-02T15:00:00 .....
#>   * feature_id     (feature_id) int64 22MB 101 179 181 ... 1180001803 1180001804
#> Data variables:
#>     streamflow     (init_time, forecast_time, feature_id) float64 400MB 0.17 ...

ds = ds.where(ds.feature_id.isin(reaches), drop=True)
#> <xarray.Dataset> Size: 2kB
#> Dimensions:        (init_time: 1, forecast_time: 18, feature_id: 10)
#> Coordinates:
#>   * init_time      (init_time) datetime64[ns] 8B 2025-09-02T14:00:00
#>   * forecast_time  (forecast_time) datetime64[ns] 144B 2025-09-02T15:00:00 .....
#>   * feature_id     (feature_id) int64 80B 2330279 6965985 ... 20073165 24423427
#> Data variables:
#>     streamflow     (init_time, forecast_time, feature_id) float64 1kB 0.04 .....

ds = ds.load()
end = time.time()
#> 0.793 seconds

# --- Analysis and Assimilation ---
uri = "https://data.lynker-spatial.com/nwm/analysis/2025090214.zarr"
start = time.time()
ds = xr.open_dataset(uri, engine="zarr", chunks="auto")
#> <xarray.Dataset> Size: 89MB
#> Dimensions:        (init_time: 1, forecast_time: 3, feature_id: 2776734)
#> Coordinates:
#>   * forecast_time  (forecast_time) datetime64[ns] 24B 2025-09-02T14:00:00 ......
#>   * init_time      (init_time) datetime64[ns] 8B 2025-09-02T14:00:00
#>   * feature_id     (feature_id) int64 22MB 101 179 181 ... 1180001803 1180001804
#> Data variables:
#>     streamflow     (init_time, forecast_time, feature_id) float64 67MB dask.array<chunksize=(1, 3, 2776734), meta=np.ndarray>

ds = ds.where(ds.feature_id.isin(reaches), drop=True)
#> <xarray.Dataset> Size: 352B
#> Dimensions:        (init_time: 1, forecast_time: 3, feature_id: 10)
#> Coordinates:
#>   * forecast_time  (forecast_time) datetime64[ns] 24B 2025-09-02T14:00:00 ......
#>   * init_time      (init_time) datetime64[ns] 8B 2025-09-02T14:00:00
#>   * feature_id     (feature_id) int64 80B 2330279 6965985 ... 20073165 24423427
#> Data variables:
#>     streamflow     (init_time, forecast_time, feature_id) float64 240B dask.array<chunksize=(1, 3, 10), meta=np.ndarray>

ds = ds.load()
end = time.time()
#> 3.0864 seconds

# --- NWIS ---
uri = "https://data.lynker-spatial.com/nwis/2025090214_discharge.zarr"
start = time.time()
ds = xr.open_dataset(uri, engine="zarr")
#> <xarray.Dataset> Size: 3MB
#> Dimensions:    (site_id: 8457, time: 61)
#> Coordinates:
#>     lon        (site_id) float64 68kB ...
#>     lat        (site_id) float64 68kB ...
#>   * site_id    (site_id) <U15 507kB '01010000' '01010070' ... '463836090423701'
#>     site_name  (site_id) object 68kB ...
#>   * time       (time) datetime64[ns] 488B 2025-09-02T14:00:00 ... 2025-09-02T...
#> Data variables:
#>     discharge  (site_id, time) float32 2MB ...
#> Attributes:
#>     source:        USGS NWIS Instantaneous Values (iv)
#>     window_start:  2025-09-02T14:00:00Z
#>     window_end:    2025-09-02T15:00:00Z
#>     aggregation:   last
#>     variables:     discharge(00060)


ds = ds.where(ds.site_id == "06752260", drop=True)
#> <xarray.Dataset> Size: 816B
#> Dimensions:    (site_id: 1, time: 61)
#> Coordinates:
#>     lon        (site_id) float64 8B -105.1
#>     lat        (site_id) float64 8B 40.59
#>   * site_id    (site_id) <U15 60B '06752260'
#>     site_name  (site_id) object 8B 'CACHE LA POUDRE RIVER AT FORT COLLINS, CO'
#>   * time       (time) datetime64[ns] 488B 2025-09-02T14:00:00 ... 2025-09-02T...
#> Data variables:
#>     discharge  (site_id, time) float32 244B 46.3 nan nan nan ... nan nan 46.3
#> Attributes:
#>     source:        USGS NWIS Instantaneous Values (iv)
#>     window_start:  2025-09-02T14:00:00Z
#>     window_end:    2025-09-02T15:00:00Z
#>     aggregation:   last
#>     variables:     discharge(00060)

ds = ds.load()
end = time.time()
#> 1.894 seconds
```
