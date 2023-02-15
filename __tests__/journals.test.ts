import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /journals`, async () => {
	const r = await c.journals("engineering")
	expect(r.ok).toBe(true)
})

test(`GET /journals`, async () => {
	const r = await c.journal("2231-3818")
	expect(r.ok).toBe(true)
})

test(`GET /journals`, async () => {
	const r = await c.journalWorks("2231-3818")
	expect(r.ok).toBe(true)
})
