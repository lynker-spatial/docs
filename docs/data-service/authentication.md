# Authentication

## Bearer Token

Unless you are able to perform the OAuth2 authorization code flow directly, accessing the Lynker Spatial data service will require setting a Bearer token on all HTTP requests.  This bearer token is retrievable from: https://proxy.lynker-spatial.com/token.

::: info
In this case, the bearer token is an OAuth2 ID token, not an access token.
:::

This will return a bearer token, its expiration time, and your account email in JSON form.

:::::tabs
== R

### hfutils

[hfutils](https://github.com/lynker-spatial/hfutils) does **not** require retrieving the bearer token yourself. It provides a dedicated OAuth2 client that performs the [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow) within an R session. Therefore, token management is automated when using hfutils to access Lynker Spatial resources.  Additionally, you can manually pass this token like so:

```r 
token <- hfutils::lynker_spatial_auth()$id_token
tbl <- flowfabric_streamflow_query("nws_owp_nwm_analysis", feature_ids = c("101"), token = token)
```

This will perform the OAuth2 flow to provision a short-lived bearer token.  You can call this function as often as needed. If called after your token is expired, it will refresh the token. 

== Python

### fsspec/xarray

You can pass this token across your python environment like so to access Lynker Spatial resources:

::: tip
For [rioxarray](https://github.com/corteva/rioxarray), use [GDAL bearer token authentication](#GDAL)
by setting the environment variables in your Python session.
:::

```python
import xarray as xr

bearer  = "<your_token_here>"
headers = { "Authorization": f"Bearer {bearer}" }
fs      = fsspec.filesystem("https", client_kwargs={ "headers": headers })
store   = fs.open("https://proxy.lynker-spatial.com/.../data.zarr")

xr.open_dataset(store)
```

== CLI

You can also pass this directly in the command-line, for example:

### curl

```sh
export LYNKER_SPATIAL_TOKEN="<your_token_here>"

curl -H "Authorization: Bearer <your_token_here>" \
    "https://proxy.lynker-spatial.com/oauth2/userinfo"
```

### GDAL

::: warning
This requires GDAL >= 3.9.
:::

```sh
export GDAL_HTTP_AUTH=BEARER
export GDAL_HTTP_BEARER="<'bearer' from https://proxy.lynker-spatial.com/token>"

gdalinfo -ro -so "https://proxy.lynker-spatial.com/.../data.zarr"
```

:::::

Now that you know how to get authenticated, [see how you access the data](/data-service/accessing-data.md).