# Tiles

[![](/img/tiles_hero.png)](https://tiles.lynker-spatial.com/)

The [Lynker Spatial Tile marketplace](https://tiles.lynker-spatial.com/) provides cloud-hosted vector and raster tile datasets (such as the Modeling Hydrofabric, Continental Rivers, and National Wetlands]) optimized for web and desktop applications. All data is served in Protocol Buffer (PBF) format and requires JWT Bearer token authentication.  This guide will help you quickly set up your account, authenticate, and pull your first tile from the Lynker Spatial Tile Service!  For more details see the [more extensive tiles documentation](https://tiles.lynker-spatial.com/docs/index.html#signup).

### Step 1: Log into your Lynker Spatial data proxy Account
1. Visit the [Lynker Spatial Authentication Portal](https://proxy.lynker-spatial.com/) (see the [Authentication quickstart](https://docs.lynker-spatial.com/data-service/authentication) for more details) to sign in.

### Step 2: Get Your Access Token
Access to the Map Tiles requires a JWT Bearer token. Tokens are user-specific and expire after 1 day (Refresh tokens last 30 days). 

You can retrieve your token programmatically using Python (`boto3`), or you can copy it directly from your active session in the authentication portal.

:::::tabs
== GUI session

Navigate to: https://proxy.lynker-spatial.com/token to find the relevent token you'll need.

[![](/img/gui_token.png)](https://proxy.lynker-spatial.com/token)

== Python


**Python (`boto3`) Example:**
```python
# pip install boto3
import boto3, os

def get_token(username, password):
    client = boto3.client('cognito-idp', region_name='us-west-2')
    resp = client.initiate_auth(
        AuthFlow='USER_PASSWORD_AUTH',
        AuthParameters={'USERNAME': username, 'PASSWORD': password},
        ClientId='73r3fn6gi8f3qhha2m5n0197v4'
    )
    return resp['AuthenticationResult']['AccessToken']

# Retrieve the token
TOKEN = get_token(
    os.environ.get('LYNKER_USERNAME'),
    os.environ.get('LYNKER_PASSWORD')
)
print(TOKEN) 
```

:::::


### Step 3: Verify Service Access
Once you have your token, export it to your environment and verify the connection by calling the catalog endpoint.  An easy way to test this is in the command line:

:::::tabs
== Windows cmd

```cmd
set "LYNKER_TOKEN=<your_token_here>"

curl -H "Authorization: Bearer %LYNKER_TOKEN%" https://tiles.lynker-spatial.com/catalog
```

If you've done this correctly it should print out a list of the avalible tiles like so:

![](/img/windows_sucess_auth.png)

== Bash

```bash
export LYNKER_TOKEN="<your_token_here>"

curl -H "Authorization: Bearer $LYNKER_TOKEN" \
  https://tiles.lynker-spatial.com/catalog
```

:::::

### Step 4: Integrate into your workflows!

Use your token to request a tile from the `lynker-spatial-modeling-fabric` dataset. Note that tile requests do not need the `.pbf` extension in the URL.


:::::tabs
== QGIS

To use the tiles within a QGIS session:

1) Open QGIS and go to Layer → Add Layer → Add Vector Tile Layer
2) Click the New button to create a new connection
3) Enter connection details:

Name: Lynker Hydrofabric
URL: https://tiles.lynker-spatial.com/api/tiles/lynker-spatial-modeling-fabric/{z}/{x}/{y}  (omit .pbf extension)

4) Go to the HTTP Headers tab and add custom header:
Header Name: Authorization
Header Value: Bearer YOUR_ACCESS_TOKEN

5) Click OK and save the connection
6) Select the connection from the list and add the layer
7) gure symbology by right-clicking the layer → Properties → Symbology


== MapLibre GL JS

To integrate the vector tiles into a MapLibre GL JS frontend, you configure your source layer as exampled below. 

```javascript
map.addSource('hydrofabric', {
    type: 'vector',
    tiles: ['https://tiles.lynker-spatial.com/api/tiles/lynker-spatial-modeling-fabric/{z}/{x}/{y}'],
    minzoom: 0,
    maxzoom: 14
});

map.addLayer({
    id: 'flowpaths',
    type: 'line',
    source: 'hydrofabric',
    'source-layer': 'flowpath',
    paint: {
        'line-color': '#0084ff',
        'line-width': 1.5
    }
});
```

:::::

Find more information on how to use the Lynker Spatial gridded data packages at it's [quickstart here](/data-service/gridded.md), or see how you can apply the [flowfabric-api](https://flowfabric-api.lynker-spatial.com/) to gain [Hydro-intellegence](/docs/data-service/accessing-data.md) on their assoisated quickstarts.