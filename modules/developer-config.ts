import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineNuxtModule, useLogger } from 'nuxt/kit'
import { Ajv } from 'ajv'
import addFormats from 'ajv-formats'

/**
 * Validates developer.json against developer.schema.json when Nuxt starts,
 * so that a typo in the content fails fast with a readable message instead
 * of breaking a page at runtime.
 */
export default defineNuxtModule({
  meta: { name: 'developer-config' },
  setup(_options, nuxt) {
    const logger = useLogger('developer.json')
    const schemaPath = resolve(nuxt.options.rootDir, 'developer.schema.json')
    const configPath = resolve(nuxt.options.rootDir, 'developer.json')

    const schema = JSON.parse(readFileSync(schemaPath, 'utf8'))
    const config = JSON.parse(readFileSync(configPath, 'utf8'))

    const ajv = new Ajv({ allErrors: true, strict: true })
    addFormats(ajv)
    const validate = ajv.compile(schema)

    if (validate(config)) {
      logger.success('developer.json is valid')
      return
    }

    for (const error of validate.errors ?? []) {
      const where = error.instancePath || '(root)'
      const extra = error.keyword === 'additionalProperties' ? ` "${error.params.additionalProperty}"` : ''
      logger.error(`${where} ${error.message}${extra}`)
    }
    throw new Error('developer.json does not match developer.schema.json. Fix the errors above and start again.')
  },
})
