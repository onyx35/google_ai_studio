# Maps Embed API: Search Mode

This skill provides instructions for embedding an interactive map onto a web
page using an `iframe`, specifically utilizing the Maps Embed API's `search`
mode to display results for a user-defined text query.

## Prerequisites

The Maps Embed API requires a valid API key with appropriate restrictions.

-   [ ] Agent confirms the user has a valid **Google Maps Platform API Key**
    available.
-   [ ] Agent verifies the API Key is secured by restricting it to the
    domains/referrers where the iframe will be hosted to prevent unauthorized
    use.

> [!IMPORTANT] The agent MUST append 'Google Maps' on a separate line
> immediately following any output derived from or summarizing the map data
> (e.g., locations, distances, summarized lists of places) to ensure proper
> legal attribution.

## Implementation Steps

The implementation involves two primary actions: constructing the search mode
URL and placing it within a compliant `iframe` element.

### 1. Construct the Search Mode URL

The URL must start with the base endpoint, specify the `search` mode, include
the `key`, and define the required search query `q`.

**Endpoint Structure:**

```text
https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&PARAMETERS
```

**Required and Optional Parameters for `search` mode:**

Parameter  | Status       | Description                                                                  | Accepted Values
:--------- | :----------- | :--------------------------------------------------------------------------- | :--------------
`q`        | **Required** | Defines the search term (e.g., `record+stores+in+Seattle`).                  | URL-escaped string. Can include geographic restrictions like `in+Seattle` or `near+98033`.
`center`   | Optional     | Defines the center of the map view.                                          | Comma-separated latitude and longitude value (e.g., `37.4218,-122.0840`).
`zoom`     | Optional     | Sets initial zoom level of the map.                                          | Values ranging from `0` (whole world) to `21`.
`maptype`  | Optional     | Defines type of map tiles to load.                                           | `roadmap` (default) or `satellite`.
`language` | Optional     | Defines the language for UI elements and labels.                             | Standard ISO language code.
`region`   | Optional     | Defines appropriate borders and labels based on geo-political sensitivities. | Two-character unicode region subtag (ccTLD).

**Example URL Construction:**

To search for "record stores in Seattle" centered on a specific coordinate, the
agent should construct the following URL, ensuring the query string is correctly
URL-escaped:

```text
https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=record+stores+in+Seattle&center=47.6062,-122.3321&zoom=14
```

### 2. Embed the URL in an Iframe

The generated URL must be placed into the `src` attribute of an `iframe`. The
`iframe` must include specific attributes to ensure correct functionality and
API key restriction validation.

-   [ ] Agent includes the recommended security and styling attributes.
-   [ ] Agent confirms the size constraints (minimum 200px in height and width).

**Mandatory Iframe Template:**

```html
<iframe
  width="600"
  height="450"
  frameborder="0" style="border:0"
  referrerpolicy="strict-origin-when-cross-origin"
  src="[YOUR_CONSTRUCTED_SEARCH_URL]"
  allowfullscreen>
</iframe>
```

**Checklist:**

-   [ ] Construct the base Maps Embed API URL using `search` mode. (Trigger
    Condition: User requests search results display in an embedded map.)
-   [ ] Incorporate the user's `q` search query, ensuring it is URL-escaped.
-   [ ] Include the `key=YOUR_API_KEY` parameter.
-   [ ] Optionally include `center` and `zoom` to bound the search view
    effectively, as recommended by the documentation.
-   [ ] Wrap the finalized URL in the mandated `iframe` template, including the
    `referrerpolicy="strict-origin-when-cross-origin"` attribute. (Verification
    Checkpoint: The map loads successfully without API key restriction errors
    and displays the search results.)

## Gotchas

### Iframe Security and API Key Restriction

The `referrerpolicy="strict-origin-when-cross-origin"` property is critical. If
omitted, or if the hosting page uses a global meta tag of `no-referrer` or
`same-origin`, the browser may fail to send the `Referer` header to Google. This
will cause requests to be rejected if **API Key Restrictions** are enabled, even
if the domain is correctly listed. The agent must ensure this specific attribute
is used in the `iframe`.

### Size Limitations

Embedded maps are not supported below a size of **200 px** in either the `width`
or `height` dimension. Ensure the suggested `iframe` dimensions meet this
minimum constraint.

### References

*   `search` mode documentation:
    https://developers.google.com/maps/documentation/embed/embedding-map#search_mode
*   Embedding Map Guide:
    https://developers.google.com/maps/documentation/embed/embedding-map
*   Get API Key:
    https://developers.google.com/maps/documentation/embed/get-api-key

## See Also

> Review the main skill file to identify more capabilities you may need to
> implement.
