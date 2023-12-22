import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`funders`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient("", "", true)
	})

	test(`GET /funders`, async () => {
		const { ok, statusText } = await c.funders("epsrc")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /funder/:id`, async () => {
		const { ok, statusText } = await c.funder("100000047")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /funder/:id/works`, async () => {
		const { ok, statusText } = await c.fundersWorks("100000047")
		assert.strictEqual(ok, true, statusText)
	})
})
