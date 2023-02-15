import type {
	CrossrefClient,
	Items,
	LicenseSearchResult,
	SearchQueryParams,
} from "../index.js"

export async function licenses(
	this: CrossrefClient,
	query: string,
	rows: number = 20,
	offset: number = 0
) {
	const url = `${this._url}/licenses`
	let params: SearchQueryParams = { query, rows, offset }
	return this._fetch<Items<LicenseSearchResult>>("GET", url, params)
}
