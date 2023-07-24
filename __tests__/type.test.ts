import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`types`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /types`, async () => {
		const r = await c.types("")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /types/:id`, async () => {
		const r = await c.type("book-section")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /types/:id/works`, async () => {
		const r = await c.typeWorks("book-section")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
