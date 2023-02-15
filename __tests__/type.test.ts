import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /types`, async () => {
	const r = await c.types("")
	expect(r.ok).toBe(true)
})

test(`GET /types/:id`, async () => {
	const r = await c.type("book-section")
	expect(r.ok).toBe(true)
})

test(`GET /types/:id/works`, async () => {
	const r = await c.typeWorks("book-section")
	expect(r.ok).toBe(true)
})
