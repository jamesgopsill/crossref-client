const { CrossrefClient } = require("@jamesgopsill/crossref-client")

const client = new CrossrefClient()

const search = {
	queryAuthor: "Richard Feynman",
}
client.works(search).then((r) => {
	if (r.ok && r.status == 200) console.log(r.content)
})
