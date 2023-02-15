import { CrossrefClient } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /licenses`, async () => {
	const r = await c.licenses("creative")
	expect(r.ok).toBe(true)
})
