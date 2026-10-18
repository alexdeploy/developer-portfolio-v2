import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { generateConfigTypes, typesPath } from '../scripts/config-types.mjs'

describe('app/types/developer.ts', () => {
  it('is up to date with developer.schema.json (run `yarn schema:types` if this fails)', async () => {
    const generated = await generateConfigTypes()
    expect(readFileSync(typesPath, 'utf8')).toBe(generated)
  })
})
