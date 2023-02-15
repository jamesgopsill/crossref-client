const keys: string[] = ["dateTime", "lastStatusCheckTime"]

export const parseDates = (obj: any) => {
	Object.keys(obj).forEach((key) => {
		// If a key is a Date key
		if (keys.includes(key)) {
			// Replace value with date object
			if (typeof obj[key] == "number") {
				obj[key] = new Date(obj[key])
			} else {
				obj[key] = new Date(Date.parse(obj[key]))
			}
		}
		// If it is an array then iterate through the objects and perform the recursive process objects
		if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
			for (const el of obj[key]) {
				parseDates(el)
			}
		}
		// if it is an object then process it
		if (
			typeof obj[key] == "object" &&
			Array.isArray(obj[key]) == false &&
			obj[key] != null
		) {
			parseDates(obj[key])
		}
	})
}
