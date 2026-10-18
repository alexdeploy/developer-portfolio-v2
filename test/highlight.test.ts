import { describe, expect, it } from 'vitest'
import { highlightCode } from '../app/utils/highlight'

describe('highlightCode', () => {
  it('uses the language GitHub reports for the file', () => {
    const result = highlightCode('const answer: number = 42', 'TypeScript')
    expect(result.language).toBe('typescript')
    expect(result.value).toContain('hljs-keyword')
  })

  it('maps GitHub names that highlight.js calls differently', () => {
    expect(highlightCode('<div class="a"></div>', 'HTML').language).toBe('xml')
    expect(highlightCode('echo hi', 'Shell').language).toBe('bash')
  })

  it('falls back to auto-detection for unknown or missing languages', () => {
    const unknown = highlightCode('def greet(name):\n    return f"hi {name}"', 'Not a language')
    expect(unknown.value).toContain('hljs-')
    expect(highlightCode('{ "a": 1 }', null).value).toContain('hljs-')
  })

  it('escapes the source, so the result is safe for v-html', () => {
    const result = highlightCode('<script>alert(1)</script>', 'Markdown')
    expect(result.value).not.toContain('<script>')
    expect(result.value).toContain('&lt;')
  })

  it('returns empty markup for empty content', () => {
    expect(highlightCode('', 'TypeScript')).toEqual({ value: '', language: '' })
  })
})
