import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /funders`, async () => {
	const r = await c.funders("epsrc")
	expect(r.ok).toBe(true)
})

test(`GET /funder/:id`, async () => {
	const r = await c.funder("100000047")
	expect(r.ok).toBe(true)
})

test(`GET /funder/:id/works`, async () => {
	const r = await c.fundersWorks("100000047")
	expect(r.ok).toBe(true)
})
