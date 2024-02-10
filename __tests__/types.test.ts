import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`types`, { concurrency: 1 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient("", "", true)
	})

	test(`GET /types`, async () => {
		const { ok, statusText } = await c.types("")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /types/:id`, async () => {
		const { ok, statusText } = await c.type("book-section")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /types/:id/works`, async () => {
		const { ok, statusText } = await c.typeWorks("book-section")
		assert.strictEqual(ok, true, statusText)
	})
})
