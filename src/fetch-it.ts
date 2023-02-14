import { CrossrefClient } from "./index.js";

export async function fetchIt<T>(
	this: CrossrefClient,
	url: string,
	params: { [k: string]: any } | undefined = undefined
) {
	return
}