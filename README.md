# Crossref API Typescript Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems. The client has been used in our systematic literature reviews. It is isomorphic capable of running on server (Node.js) and client-side (Browser) applications.

## Using crossref-client

To install the package, use the following code. I am aiming to put it onto npm soon.

```
pnpm install @jamesgopsill/crossref-client
```

You can then use it in your code like so (see the `examples` folder for more implementations):

**Typescript**

```typescript
import { CrossrefClient, QueryWorksParams } from "@jamesgopsill/crossref-client"

const client = new CrossrefClient()

const search: QueryWorksParams = {
	queryAuthor: "Richard Feynman",
}
const r = await client.works(search)
if (r.ok && r.status == 200) console.log(r.content)
```

Selecting fields to return.

```typescript
import {
	CrossrefClient,
	QueryWorksParams,
	WorkSelectOptions,
} from "@jamesgopsill/crossref-client"

const client = new CrossrefClient()

const search: QueryWorksParams = {
	queryAuthor: "Richard Feynman",
	select: [WorkSelectOptions.CONTENT_DOMAIN],
	sample: 10,
}
const r = await client.works(search)
if (r.ok && r.status == 200) console.log(r.content)
```

**Javascript (ESM)**

```javascript
import { CrossrefClient } from "@jamesgopsill/crossref-client"

const client = new CrossrefClient()

const search = {
	queryAuthor: "Richard Feynman",
}
const r = await client.works(search)
if (r.ok && r.status == 200) console.log(r.content)
```

**Javascript (CJS)**

```javascript
const { CrossrefClient } = require("@jamesgopsill/crossref-client")

const client = new CrossrefClient()

const search = {
	queryAuthor: "Richard Feynman",
}
client.works(search).then((r) => {
	if (r.ok && r.status == 200) console.log(r.content)
})
```

## Documentation

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/crossref-client/). More details on the API can be found at [Crossref API](https://api.crossref.org/swagger-ui/index.html).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

If you end up using the client a lot, please consider sponsoring the project to support the continued development and maintanence of the client.
