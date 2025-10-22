# Lynker Spatial Authentication

## Bearer Token

Outside of `hfutils`, unless you perform the OAuth2 authorization code grant flow,
you will require setting a Bearer token on HTTP requests to the Lynker Spatial service proxy.

To get your bearer token, you can retrieve the token from https://proxy.lynker-spatial.com/token.

This will return a (*long*) bearer token, its expiration time, and your account email in JSON.

## R: hfutils

hfutils does **not** require retrieving the bearer token yourself. It provides a dedicated
OAuth2 client that performs the [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow) within an R session. Therefore,
token management is automated when using hfutils to access Lynker Spatial resources.

To authenticate:

```r
hfutils::lynker_spatial_auth()
```

This will perform the OAuth2 flow to provision a short-lived bearer
token. This function automatically saves it as an option in the R session
under the `lynker_spatial.token` option.

You can call this function as often as needed. If called after your token
is expired, it will refresh the token. The function argument `libs` optionally
applies the token to multiple libraries, since different programming libraries
tend to use different HTTP clients.

For example, `libs = "gdal"` will apply
the OAuth2 ID Token as the bearer for any GDAL requests when GDAL >= 3.9.

## CLI: curl

```sh
export LYNKER_SPATIAL_TOKEN="<'bearer' from https://proxy.lynker-spatial.com/token>"

curl -H "Authorization: Bearer ${LYNKER_SPATIAL_TOKEN}" \
    "https://proxy.lynker-spatial.com/oauth2/userinfo"
```

## CLI: GDAL

> Note: this requires GDAL >= 3.9.

```sh
export GDAL_HTTP_AUTH=BEARER
export GDAL_HTTP_BEARER="<'bearer' from https://proxy.lynker-spatial.com/token>"

gdalinfo -ro -so "https://proxy.lynker-spatial.com/.../data.zarr"
```

## Python: fsspec/xarray

> Note: for `rioxarray`, use GDAL bearer token authentication.

```python
import xarray as xr

bearer  = "<'bearer' from https://proxy.lynker-spatial.com/token>"
headers = { "Authorization": f"Bearer {bearer}" }
fs      = fsspec.filesystem("https", client_kwargs={ "headers": headers })
store   = fs.open("https://proxy.lynker-spatial.com/.../data.zarr")

xr.open_dataset(store)
```
