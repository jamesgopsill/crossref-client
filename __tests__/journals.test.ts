import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`journals`, { concurrency: 1 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient("", "", true)
	})

	test(`GET /journals`, async () => {
		const { ok, statusText } = await c.journals("engineering")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /journals`, async () => {
		const { ok, statusText } = await c.journal("2231-3818")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /journals`, async () => {
		const { ok, statusText } = await c.journalWorks("2231-3818")
		assert.strictEqual(ok, true, statusText)
	})
})
