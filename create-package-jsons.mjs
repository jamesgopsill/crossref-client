import { writeFileSync } from "fs"

const esmJSON = {
	type: "module",
}

writeFileSync("dist/esm/package.json", JSON.stringify(esmJSON))

const cjsJSON = {
	type: "commonjs",
}

writeFileSync("dist/cjs/package.json", JSON.stringify(cjsJSON))
