import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient, QueryWorksParams } from "../src/index.js"

describe(`types`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /works`, async () => {
		const search: QueryWorksParams = {
			queryAuthor: "James Gopsill",
		}
		const r = await c.works(search)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /work/:doi`, async () => {
		const r = await c.work("10.21278/idc.2018.0192")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /work/:doi/agency`, async () => {
		const r = await c.worksAgency("10.21278/idc.2018.0192")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
