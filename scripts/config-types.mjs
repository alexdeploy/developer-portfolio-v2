// Shared by `scripts/generate-config-types.mjs` and the tests:
// turns developer.schema.json into the TypeScript types of app/types/developer.ts.
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { compile } from 'json-schema-to-typescript'

export const root = resolve(import.meta.dirname, '..')
export const schemaPath = resolve(root, 'developer.schema.json')
export const typesPath = resolve(root, 'app/types/developer.ts')

const banner = `/*
 * GENERATED FILE. Do not edit by hand.
 * Source: developer.schema.json. Regenerate with \`yarn schema:types\`.
 */`

export async function generateConfigTypes() {
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'))
  return compile(schema, 'DeveloperConfig', {
    bannerComment: banner,
    additionalProperties: false,
    style: { semi: false, singleQuote: true, printWidth: 120 },
  })
}
