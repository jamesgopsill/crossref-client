import type {
	CrossrefClient,
	Funder,
	Funders,
	Item,
	Items,
	QueryWorksParams,
	SearchQueryParams,
	Work,
} from "../index.js"

export async function fundersWorks(
	this: CrossrefClient,
	id: string,
	query: QueryWorksParams | undefined = undefined,
) {
	const url = `${this._url}/funders/${id}/works`
	return this._fetch<Items<Work>>("GET", url, query)
}

export async function funder(this: CrossrefClient, id: string) {
	const url = `${this._url}/funders/${id}`
	return this._fetch<Item<Funder>>("GET", url)
}

export async function funders(
	this: CrossrefClient,
	query: string,
	location: string = "",
	rows: number = 20,
	offset: number = 0,
) {
	const url = `${this._url}/funders/`
	let params: SearchQueryParams = { query, rows, offset }
	if (location) params["filter"] = location
	return this._fetch<Items<Funders>>("GET", url)
}
