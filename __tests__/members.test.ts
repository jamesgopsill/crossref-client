import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /members`, async () => {
	const r = await c.members("elsevier")
	expect(r.ok).toBe(true)
})

test(`GET /members/:id`, async () => {
	const r = await c.member("78")
	expect(r.ok).toBe(true)
})

test(`GET /members/:id/works`, async () => {
	const r = await c.memberWorks("78")
	expect(r.ok).toBe(true)
})
