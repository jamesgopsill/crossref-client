import type {
	CrossrefClient,
	Item,
	Items,
	QueryWorksParams,
	Type,
	Works,
} from "../index.js"

export async function type(this: CrossrefClient, id: string) {
	const url = `${this._url}/types/${id}`
	return this._fetch<Item<Type>>("GET", url)
}

export async function types(
	this: CrossrefClient,
	query: string,
	rows: number = 20,
	offset: number = 0,
) {
	const url = `${this._url}/types/`
	const params = {
		query,
		rows,
		offset,
	}
	return this._fetch<Items<Type>>("GET", url, params)
}

export async function typeWorks(
	this: CrossrefClient,
	id: string,
	query: QueryWorksParams | undefined = undefined,
) {
	const url = `${this._url}/types/${id}/works`
	return this._fetch<Items<Works>>("GET", url, query)
}
