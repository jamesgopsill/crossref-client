import { keysToCamel, keysToDotsAndDashes } from "./format-keys.js"
import type { CrossrefClient, HttpResponse } from "./index.js"
import { parseDates } from "./parse-dates.js"

export async function fetchIt<T>(
	this: CrossrefClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	params: { [k: string]: any } | undefined = undefined,
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}

	if (this._plusToken) {
		config.headers["Crossref-Plus-API-Token"] = `Bearer ${this._plusToken}`
	}

	// for polite api
	if (this._mailto) {
		if (typeof params === "object") {
			params["mailto"] = this._mailto
		} else {
			params = {
				mailto: this._mailto,
			}
		}
	}

	if (typeof params === "object") {
		params = keysToDotsAndDashes(params)
	}

	if (method === "GET" && typeof params === "object") {
		url += "?"
		for (const [k, v] of Object.entries(params)) {
			url += k + "=" + v + "&"
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type")?.includes("application/json")) {
			let content = await r.json()
			content = keysToCamel(content)
			parseDates(content)
			r.content = content
		}
	}
	return r
}
