import config from '~~/developer.json'
import { webManifest } from '#shared/utils/site-meta'

/**
 * Web app manifest built from developer.json, so the name, description and language follow the
 * config instead of a hand-edited file. `nuxt generate` prerenders it (see nitro.prerender in nuxt.config.ts).
 */
export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'application/manifest+json; charset=utf-8')
  return webManifest(config)
})
