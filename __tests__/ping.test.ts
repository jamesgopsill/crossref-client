import { CrossrefClient } from "../src"
import { keysToCamel, keysToDotsAndDashes } from "../src/format-keys.js"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`Ping`, () => {
	expect(c.ping()).toBe("pong")
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
	expect(arr).toEqual(correct)
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
	console.log(arr)
	expect(arr).toEqual(correct)
})
