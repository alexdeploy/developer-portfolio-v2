import { describe, expect, it } from 'vitest'
import { contactHref, mailtoHref } from '../app/utils/contact'

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

describe('mailtoHref', () => {
  it('prefills the recipient, a subject and the message with the sender', () => {
    const href = mailtoHref('me@example.com', { name: 'Alex', email: 'alex@example.com', message: 'Hola, ¿qué tal?' })
    const url = new URL(href)

    expect(url.protocol).toBe('mailto:')
    expect(url.pathname).toBe('me@example.com')
    expect(url.searchParams.get('subject')).toBe('Message from Alex')
    expect(url.searchParams.get('body')).toBe('Hola, ¿qué tal?\n\nAlex <alex@example.com>')
  })

  it('encodes spaces as %20, which mail apps understand, and keeps a literal plus sign', () => {
    const href = mailtoHref('me@example.com', { name: 'A B', email: 'a+b@example.com', message: '1 + 1' })

    expect(href).not.toContain('+')
    expect(href).toContain('subject=Message%20from%20A%20B')
    expect(new URL(href).searchParams.get('message')).toBeNull()
    expect(new URL(href).searchParams.get('body')).toBe('1 + 1\n\nA B <a+b@example.com>')
  })
})
