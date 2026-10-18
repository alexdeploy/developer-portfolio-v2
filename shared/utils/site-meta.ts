import type { DeveloperConfig } from '../types/developer'

/** Background colour of the site, used as theme colour by the browser UI and the manifest. */
export const THEME_COLOR = '#010C15'

export interface SiteMeta {
  /** Public base URL without a trailing slash, or `undefined` when the config does not set one. */
  url?: string
  title: string
  description: string
  /** Absolute when `url` is set, otherwise exactly as written in the config. */
  image: string
  lang: string
}

type SiteInput = Pick<DeveloperConfig, 'name' | 'role' | 'site'>

/** Resolves the optional `site` block of developer.json into the values used by the `<head>` and the manifest. */
export function siteMeta(config: SiteInput): SiteMeta {
  const site = config.site ?? {}
  const url = site.url?.replace(/\/+$/, '') || undefined
  return {
    url,
    title: site.title ?? `${config.name} | ${config.role}`,
    description: site.description ?? `Portfolio of ${config.name}, ${config.role}.`,
    image: absoluteUrl(site.image ?? '/demo-share.jpg', url),
    lang: site.lang ?? 'en',
  }
}

/** Prefixes a path with the site URL. Absolute values, or any path when there is no site URL, are returned unchanged. */
export function absoluteUrl(path: string, base?: string): string {
  if (!base || /^[a-z][a-z0-9+.-]*:/i.test(path)) return path
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`
}

/** Web app manifest built from the same metadata, served at /pwa/manifest.json. */
export function webManifest(config: SiteInput) {
  const site = siteMeta(config)
  const icon = (size: number) => ({ src: `/pwa/icons/icon${size}.png`, sizes: `${size}x${size}`, type: 'image/png' })
  return {
    name: site.title,
    short_name: config.name,
    description: site.description,
    lang: site.lang,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    icons: [
      ...[48, 72, 96, 144, 168, 192].map(icon),
      { ...icon(512), purpose: 'any maskable' },
    ],
  }
}
