import { describe, expect, it } from 'vitest'
import { contactHref } from '../app/utils/contact'

describe('contactHref', () => {
  it('links emails with mailto:', () => {
    expect(contactHref('email', 'user@gmail.com')).toBe('mailto:user@gmail.com')
  })

  it('links phones with tel: and strips formatting', () => {
    expect(contactHref('phone', '+34 (600) 123-456')).toBe('tel:+34600123456')
  })

  it('leaves other sources untouched', () => {
    expect(contactHref('matrix', '@user:matrix.org')).toBe('@user:matrix.org')
  })
})
