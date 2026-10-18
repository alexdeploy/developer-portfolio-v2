import { describe, expect, it } from 'vitest'
import { Ajv } from 'ajv'
import addFormats from 'ajv-formats'
import schema from '../developer.schema.json'
import config from '../developer.json'

function createValidator() {
  const ajv = new Ajv({ allErrors: true, strict: true })
  addFormats(ajv)
  return ajv.compile(schema)
}

function errorsOf(data: unknown) {
  const validate = createValidator()
  validate(data)
  return (validate.errors ?? []).map(e => `${e.instancePath || '(root)'} ${e.message}`)
}

describe('developer.schema.json', () => {
  it('is a valid JSON Schema', () => {
    expect(() => createValidator()).not.toThrow()
  })

  it('accepts the developer.json shipped with the template', () => {
    expect(errorsOf(config)).toEqual([])
  })

  it('rejects a missing required field', () => {
    const { role: _role, ...withoutRole } = config
    expect(errorsOf(withoutRole)).toEqual(['(root) must have required property \'role\''])
  })

  it('rejects unknown properties, which usually are typos', () => {
    expect(errorsOf({ ...config, logoName: 'typo' })).toEqual(['(root) must NOT have additional properties'])
  })

  it('rejects a gist ID that is not hexadecimal', () => {
    const errors = errorsOf({ ...config, gists: { 1: 'not-a-gist-id' } })
    expect(errors).toEqual(['/gists/1 must match pattern "^[0-9a-f]{20,40}$"'])
  })

  it('rejects a project without a valid URL', () => {
    const project = { ...Object.values(config.projects)[0]!, url: 'github.com' }
    const errors = errorsOf({ ...config, projects: { 1: project } })
    expect(errors).toEqual(['/projects/1/url must match format "uri"'])
  })
})
