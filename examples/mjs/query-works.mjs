import { CrossrefClient } from "@jamesgopsill/crossref-client"

const client = new CrossrefClient()

const search = {
	queryAuthor: "Richard Feynman",
}
const r = await client.works(search)
if (r.ok && r.status == 200) console.log(r.content)
