import type {
	CrossrefClient,
	Item,
	Items,
	Prefix,
	QueryWorksParams,
	Work,
} from "../index.js"

export async function prefixWorks(
	this: CrossrefClient,
	prefix: string,
	query: QueryWorksParams | undefined = undefined,
) {
	const url = `${this._url}/prefixes/${prefix}/works`
	return this._fetch<Items<Work>>("GET", url, query)
}

export async function prefix(this: CrossrefClient, prefix: string) {
	const url = `${this._url}/prefixes/${prefix}`
	return this._fetch<Item<Prefix>>("GET", url)
}
