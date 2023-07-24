import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`prefix`, { concurrency: 2 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /prefix/:prefix/works`, async () => {
		const r = await c.prefixWorks("10.1016")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /prefix/:prefix`, async () => {
		const r = await c.prefix("10.1016")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
