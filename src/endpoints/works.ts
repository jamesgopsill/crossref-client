import type {
	Agency,
	CrossrefClient,
	Item,
	Items,
	QueryWorksParams,
	Work,
} from "../index.js"

export async function worksAgency(this: CrossrefClient, doi: string) {
	doi = encodeURI(doi)
	const url = `${this._url}/works/${doi}/agency`
	return this._fetch<Items<Agency>>("GET", url)
}

export async function work(this: CrossrefClient, doi: string) {
	doi = encodeURI(doi)
	const url = `${this._url}/works/${doi}`
	return this._fetch<Item<Work>>("GET", url)
}

export async function works(
	this: CrossrefClient,
	query: QueryWorksParams | undefined = undefined,
) {
	const url = `${this._url}/works`
	return this._fetch<Items<Work>>("GET", url, query)
}
