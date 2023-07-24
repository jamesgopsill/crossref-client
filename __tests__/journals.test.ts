import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`journals`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /journals`, async () => {
		const r = await c.journals("engineering")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /journals`, async () => {
		const r = await c.journal("2231-3818")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /journals`, async () => {
		const r = await c.journalWorks("2231-3818")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
