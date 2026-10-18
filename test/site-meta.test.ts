import { describe, expect, it } from 'vitest'
import config from '../developer.json'
import { absoluteUrl, siteMeta, webManifest } from '../shared/utils/site-meta'

const person = { name: 'Jane Doe', role: 'Backend developer' }

describe('siteMeta', () => {
  it('derives every value when the site block is missing', () => {
    expect(siteMeta(person)).toEqual({
      url: undefined,
      title: 'Jane Doe | Backend developer',
      description: 'Portfolio of Jane Doe, Backend developer.',
      image: '/demo-share.jpg',
      lang: 'en',
    })
  })

  it('uses the configured values and makes the sharing image absolute', () => {
    const site = { url: 'https://jane.dev/', title: 'Jane', description: 'Hi', image: 'share.png', lang: 'es' }
    expect(siteMeta({ ...person, site })).toEqual({
      url: 'https://jane.dev',
      title: 'Jane',
      description: 'Hi',
      image: 'https://jane.dev/share.png',
      lang: 'es',
    })
  })

  it('keeps an image that is already an absolute URL', () => {
    const site = { url: 'https://jane.dev', image: 'https://cdn.example.com/share.png' }
    expect(siteMeta({ ...person, site }).image).toBe('https://cdn.example.com/share.png')
  })

  it('resolves the developer.json shipped with the template', () => {
    expect(siteMeta(config).image).toBe('https://developer-portfolio-v1.netlify.app/demo-share.jpg')
  })
})

describe('absoluteUrl', () => {
  it('joins a route path with the site URL', () => {
    expect(absoluteUrl('/about-me', 'https://jane.dev')).toBe('https://jane.dev/about-me')
    expect(absoluteUrl('/', 'https://jane.dev/portfolio')).toBe('https://jane.dev/portfolio/')
  })

  it('returns the path untouched without a site URL', () => {
    expect(absoluteUrl('/about-me')).toBe('/about-me')
  })
})

describe('webManifest', () => {
  it('follows the config', () => {
    const manifest = webManifest({ ...person, site: { description: 'Hi', lang: 'es' } })
    expect(manifest).toMatchObject({
      name: 'Jane Doe | Backend developer',
      short_name: 'Jane Doe',
      description: 'Hi',
      lang: 'es',
      start_url: '/',
      scope: '/',
    })
    expect(manifest.icons).toHaveLength(7)
    expect(manifest.icons[0]).toEqual({ src: '/pwa/icons/icon48.png', sizes: '48x48', type: 'image/png' })
    expect(manifest.icons.at(-1)?.purpose).toBe('any maskable')
  })
})
