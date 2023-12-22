import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient, QueryWorksParams } from "../src/index.js"

describe(`works`, { concurrency: 4 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient("", "", true)
	})

	test(`GET /works`, async () => {
		const search: QueryWorksParams = {
			queryAuthor: "James Gopsill",
		}
		const { ok, statusText } = await c.works(search)
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /work/:doi`, async () => {
		const { ok, statusText } = await c.work("10.21278/idc.2018.0192")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /work/:doi/agency`, async () => {
		const { ok, statusText } = await c.worksAgency("10.21278/idc.2018.0192")
		assert.strictEqual(ok, true, statusText)
	})

	test(`Client erroneously URL-encodes slashes in DOI #1`, async () => {
		const { ok, statusText } = await c.work("10.1093/nar/gkac331")
		assert.strictEqual(ok, true, statusText)
	})
})
