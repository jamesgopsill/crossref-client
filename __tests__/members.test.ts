import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`members`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`GET /members`, async () => {
		const r = await c.members("elsevier")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /members/:id`, async () => {
		const r = await c.member("78")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`GET /members/:id/works`, async () => {
		const r = await c.memberWorks("78")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
