import type { CrossrefClient, HttpResponse } from "../index.js"
import { keysToCamel, keysToDotsAndDashes } from "./format-keys.js"
import { parseDates } from "./parse-dates.js"

export async function _fetch<T>(
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
			switch (typeof v) {
				case "string":
					url += `${k}=${v}&`
					break
				case "number":
					url += `${k}=${v}&`
					break
				case "bigint":
					break
				case "boolean":
					break
				case "symbol":
					break
				case "undefined":
					break
				case "object":
					url += `${k}=${v.join(",")}&`
					break
				case "function":
					break
			}
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}

	if (this._debug) {
		console.log(`CrossrefClient._fetch: ${url}`)
	}

	const request = new Request(url, config)

	// Three retriess to catch the ECONNRESET issue that sometimes pops up.
	try {
		return await performFetch<T>(request)
	} catch (e: any) {
		try {
			if (this._debug) {
				console.log("Error fetching. Trying again.")
			}
			return await performFetch<T>(request)
		} catch (e: any) {
			if (this._debug) {
				console.log("Error fetching. Trying again.")
			}
			return await performFetch<T>(request)
		}
	}
}

async function performFetch<T>(request: Request) {
	let r = (await fetch(request)) as HttpResponse<T>
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
