import type {
	CrossrefClient,
	Item,
	Items,
	Member,
	QueryWorksParams,
	Works,
} from "../index.js"

export async function memberWorks(
	this: CrossrefClient,
	id: string,
	query: QueryWorksParams | undefined = undefined
) {
	const url = `${this._url}/members/${id}/works`
	return this._fetch<Items<Works>>("GET", url, query)
}

export async function member(this: CrossrefClient, id: string) {
	const url = `${this._url}/members/${id}`
	return this._fetch<Item<Member>>("GET", url)
}

export async function members(this: CrossrefClient, query: string) {
	const url = `${this._url}/members`
	return this._fetch<Items<Member>>("GET", url, { query })
}
