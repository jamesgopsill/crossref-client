import { CrossrefClient, QueryWorksParams } from "../src"

let c: CrossrefClient

beforeAll(() => {
	c = new CrossrefClient()
})

test(`GET /works`, async () => {
	const search: QueryWorksParams = {
		queryAuthor: "James Gopsill",
	}
	const r = await c.works(search)
	expect(r.ok).toBe(true)
})

test(`GET /work/:doi`, async () => {
	const r = await c.work("10.21278/idc.2018.0192")
	expect(r.ok).toBe(true)
})

test(`GET /work/:doi/agency`, async () => {
	const r = await c.worksAgency("10.21278/idc.2018.0192")
	expect(r.ok).toBe(true)
})
