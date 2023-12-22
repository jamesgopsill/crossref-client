import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`members`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient("", "", true)
	})

	test(`GET /members`, async () => {
		const { ok, statusText } = await c.members("elsevier")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /members/:id`, async () => {
		const { ok, statusText } = await c.member("78")
		assert.strictEqual(ok, true, statusText)
	})

	test(`GET /members/:id/works`, async () => {
		const { ok, statusText } = await c.memberWorks("78")
		assert.strictEqual(ok, true, statusText)
	})
})
