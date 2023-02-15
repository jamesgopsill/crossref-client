import type {
	CrossrefClient,
	Item,
	Items,
	Journal,
	QueryWorksParams,
	SearchQueryParams,
	Works,
} from "../index.js"

export async function journals(
	this: CrossrefClient,
	query: string,
	rows: number = 20,
	offset: number = 0
) {
	const url = `${this._url}/journals`
	let params: SearchQueryParams = { query, rows, offset }
	return this._fetch<Items<Journal>>("GET", url, params)
}

export async function journal(this: CrossrefClient, issn: string) {
	const url = `${this._url}/journals/${issn}`
	return this._fetch<Item<Journal>>("GET", url)
}

export async function journalWorks(
	this: CrossrefClient,
	issn: string,
	query: QueryWorksParams | undefined = undefined
) {
	const url = `${this._url}/journals/${issn}/works`
	return this._fetch<Items<Works>>("GET", url, query)
}
