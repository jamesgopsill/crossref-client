export const keysToCamel = (o: any) => {
	if (isObject(o)) {
		const n = {}

		Object.keys(o).forEach((k) => {
			//@ts-expect-error
			n[toCamel(k)] = keysToCamel(o[k])
		})

		return n
	} else if (isArray(o)) {
		return o.map((i: any) => {
			return keysToCamel(i)
		})
	}
	return o
}

export const keysToDotsAndDashes = (o: any) => {
	if (isObject(o)) {
		const n = {}

		Object.keys(o).forEach((k) => {
			//@ts-expect-error
			n[toDotsAndDashes(k)] = keysToDotsAndDashes(o[k])
		})

		return n
	} else if (isArray(o)) {
		return o.map((i: any) => {
			return keysToDotsAndDashes(i)
		})
	}
	return o
}

const isArray = function (a: any) {
	return Array.isArray(a)
}

const isObject = function (o: any) {
	return o === Object(o) && !isArray(o) && typeof o !== "function"
}

const toCamel = (s: string) => {
	return s.replace(/([-_.][a-z])/gi, ($1) => {
		return $1.toUpperCase().replace("-", "").replace("_", "").replace(".", "")
	})
}

const toDotsAndDashes = (s: string) => {
	s = s.replace(
		/query[A-Z]/g,
		(match) => `query.${match.slice(-1).toLowerCase()}`,
	)
	s = s.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
	return s
}
