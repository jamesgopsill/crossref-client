import assert from "node:assert"
import test, { before, describe } from "node:test"
import { CrossrefClient } from "../src/index.js"

describe(`licenses`, { concurrency: 1 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})
	test(`GET /licenses`, async () => {
		const r = await c.licenses("creative")
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
