// Regenerates app/types/developer.ts from developer.schema.json.
// The schema is the single source of truth for the shape of developer.json.
import { writeFileSync } from 'node:fs'
import { generateConfigTypes, typesPath } from './config-types.mjs'

writeFileSync(typesPath, await generateConfigTypes())
console.log(`Wrote ${typesPath}`)
