# Crossref API Typescript Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It is isomorphic capable of running on server (Node.js) and client-side (Browser) applications.

## Using crossref-client

To install the package, use the following code. I am aiming to put it onto npm soon.

```
pnpm install @jamesgopsill/crossref-client
```

You can then use in your code:

**Typescript / Javascript (ESM)**

```typescript
import { CrossrefClient } from "@jamesgopsill/crossref-client"

// Create a new client. (Only setup for app tokens at the moment)
const client = new CrossrefClient()

```


**Javascript (CJS)**

```javascript
const { CrossrefClient } = require("@jamesgopsill/octoprint-client")

// Create a new client. (Only setup for app tokens at the moment)
const client = new CrossrefClient()

```

## Client Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/crossref-client/). More details on the API can be found at [Crossref API](https://api.crossref.org/swagger-ui/index.html).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

If you end up using the client a lot, please consider sponsoring the project to support the continued development and maintanence of the client.
