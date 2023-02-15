import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /prefix/:prefix/works`, async () => {
	const r = await c.prefixWorks("10.1016")
	expect(r.ok).toBe(true)
})

test(`GET /prefix/:prefix`, async () => {
	const r = await c.prefix("10.1016")
	expect(r.ok).toBe(true)
})
