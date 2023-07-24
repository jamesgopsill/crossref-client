import assert from "node:assert"
import test, { before, describe } from "node:test"
import { keysToCamel, keysToDotsAndDashes } from "../src/format-keys.js"
import { CrossrefClient } from "../src/index.js"

describe(`Ping`, { concurrency: 3 }, () => {
	let c: CrossrefClient

	before(() => {
		c = new CrossrefClient()
	})

	test(`Ping`, () => {
		assert.strictEqual(c.ping(), "pong", "no pong")
	})

	test(`keysToCamel`, () => {
		let arr = {
			"query.status": "a",
			"message-type": "b",
			"message-version": "c",
		}
		arr = keysToCamel(arr)
		const correct = {
			queryStatus: "a",
			messageType: "b",
			messageVersion: "c",
		}
		assert.deepStrictEqual(arr, correct, JSON.stringify(arr))
	})

	test(`keysToDotsAndDashes`, () => {
		let arr = {
			queryStatus: "a",
			messageType: "b",
			messageVersion: "c",
		}
		arr = keysToDotsAndDashes(arr)
		const correct = {
			"query.status": "a",
			"message-type": "b",
			"message-version": "c",
		}
		assert.deepStrictEqual(arr, correct, JSON.stringify(arr))
	})
})
