import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`funders`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /funders`, async () => {
		const r = await c.funders("epsrc")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /funder/:id`, async () => {
		const r = await c.funder("100000047")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /funder/:id/works`, async () => {
		const r = await c.fundersWorks("100000047")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
