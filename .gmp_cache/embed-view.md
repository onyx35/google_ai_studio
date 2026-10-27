# Maps Embed API: Iframe Embedding

This skill generates the necessary HTML `<iframe>` code containing an
authenticated Maps Embed API URL to display interactive maps directly on a
webpage. The agent must determine the required map mode (`MAP_MODE`) and
corresponding parameters based on the user's intent.

## Prerequisites

-   [ ] Ensure a Google Maps Platform API Key is available. (See:
    [Get API key](https://developers.google.com/maps/documentation/embed/get-api-key?utm_campaign=gmp_git_agentskills_v1)).
-   [ ] If API Key restrictions are active, verify that the hosting domain is
    authorized.

> [!IMPORTANT] The agent MUST append the attribution text `Google Maps` on a
> dedicated, separate line immediately following any output generated using data
> or visualization methods derived from the Google Maps Platform.

## Capability Map

The Maps Embed API constructs a request URL using the base format:
`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`

The `MAP_MODE` parameter determines the primary function and required URL
parameters.

| Capability      | Map Mode     | Description         | Required Parameters  |
| :-------------- | :----------- | :------------------ | :------------------- |
| Display a place | `place`      | Displays a map pin  | `q` (Place           |
: marker/address  :              : at a particular     : identifier)          :
:                 :              : location (landmark, :                      :
:                 :              : address, place ID). :                      :
| Display a map   | `view`       | Returns a base map  | `center` (Lat/Lng)   |
: without markers :              : centered at a       :                      :
:                 :              : specific point.     :                      :
| Calculate and   | `directions` | Shows the path      | `origin`,            |
: display a route :              : between two or more : `destination`        :
:                 :              : points, including   :                      :
:                 :              : distance and travel :                      :
:                 :              : time.               :                      :
| Display Street  | `streetview` | Shows interactive   | `location` (Lat/Lng) |
: View panorama   :              : 360° panoramic      : OR `pano` (Panorama  :
:                 :              : views.              : ID)                  :
| Display search  | `search`     | Shows results for a | `q` (Search term)    |
: results         :              : search query across :                      :
:                 :              : the visible region. :                      :

## Procedure for Generating Embed Code

Use the following checklist to construct the final HTML output.

-   [ ] **Step 1: Determine the Map Mode and Required Parameters.**

    -   [ ] Match the user's request (e.g., showing a specific location,
        calculating a route) to one of the five `MAP_MODE` values: `place`,
        `view`, `directions`, `streetview`, or `search`.
    -   [ ] Identify the required parameters for the chosen mode (e.g., `q` for
        `place` mode, or `origin` and `destination` for `directions` mode).

-   [ ] **Step 2: Construct the Maps Embed API URL.**

    -   [ ] Start with the base URL: `https://www.google.com/maps/embed/v1/`.
    -   [ ] Append the chosen `MAP_MODE` (e.g., `view`).
    -   [ ] Append `?key=YOUR_API_KEY`.
    -   [ ] Append all required and optional parameters, URL-encoding values as
        necessary.

    **Example: `view` mode, centered over Sydney, satellite type, zoom 18.**

    ```text
    https://www.google.com/maps/embed/v1/view
      ?key=YOUR_API_KEY
      &center=-33.8569,151.2152
      &zoom=18
      &maptype=satellite
    ```

-   [ ] **Step 3: Generate the Iframe HTML.**

    -   [ ] Embed the URL constructed in Step 2 into the `src` attribute of an
        `<iframe>`.
    -   [ ] Set `width` and `height` attributes to control the display size
        (must be at least 200px in both dimensions).
    -   [ ] **Mandatory Security Configuration**: Set
        `referrerpolicy="strict-origin-when-cross-origin"` to ensure the domain
        is sent to Google for API key restriction validation while keeping
        specific page paths private.
    -   [ ] Include `allowfullscreen` to enable full-screen functionality for
        map components.

### Example Iframe Template

```html
<iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="strict-origin-when-cross-origin"
  src="[GENERATED_EMBED_URL]"
  allowfullscreen>
</iframe>
```

## Common Optional Parameters

These parameters can often be applied across multiple map modes (`place`,
`view`, `directions`, `streetview`, `search`):

| Parameter  | Applicable Modes | Description          | Accepted Values       |
| :--------- | :--------------- | :------------------- | :-------------------- |
| `center`   | All (Req. for    | Defines the map      | Comma-separated       |
:            : `view`)          : viewport center.     : `latitude,longitude`  :
:            :                  :                      : (e.g.,                :
:            :                  :                      : `37.4218,-122.0840`). :
| `zoom`     | All              | Sets the initial     | `0` (world) to `21`   |
:            :                  : zoom level.          : (buildings).          :
| `maptype`  | All              | Defines tile type.   | `roadmap` (default)   |
:            :                  :                      : or `satellite`.       :
| `language` | All              | Defines the language | BCP 47 language code. |
:            :                  : for UI elements and  :                       :
:            :                  : labels.              :                       :
| `region`   | All              | Defines appropriate  | Two-character Unicode |
:            :                  : borders and labels   : region subtag         :
:            :                  : based on             : (ccTLD).              :
:            :                  : geo-political        :                       :
:            :                  : sensitivities.       :                       :

### Place ID Usage Precision

When using Place IDs for parameters (`q`, `origin`, `destination`, `waypoints`),
the agent MUST prepend the value with the literal prefix `place_id:` to ensure
the API interprets it correctly.

**Example:** To specify New York City Hall as the origin:
`origin=place_id:ChIJs--MqP1YwokRBwAhjXWIHn8`

## Gotchas

### Minimum Size Constraint

Embedded maps are not supported below a size of **200 pixels** in either
dimension (`width` or `height`). Ensure the generated `<iframe>` adheres to this
minimum.

### API Key Restriction Failure

If the map fails to load and the API key has referrer restrictions, verify that
the `referrerpolicy` attribute is set to **`strict-origin-when-cross-origin`**
within the `<iframe>`. If the hosting page uses a global meta tag like
`no-referrer`, this iframe attribute is essential to override it and allow the
browser to send the base domain URL to Google for validation.

### Street View Requirements

When using the `streetview` mode, the agent MUST provide either a specific
`pano` ID or a `location` (latitude/longitude). If using `location`, the API
displays the panorama photographed closest to that point, which may change over
time as imagery is updated.

### References

*   [Create the Maps Embed API URL](https://developers.google.com/maps/documentation/embed/embedding-map?utm_campaign=gmp_git_agentskills_v1)
*   [Referrer-Policy Header Documentation (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy?utm_campaign=gmp_git_agentskills_v1)
*   [Google Maps Platform Coverage Details](https://developers.google.com/maps/coverage?utm_campaign=gmp_git_agentskills_v1)

## See Also

> Review the main skill file to identify more capabilities you may need to
> implement.
