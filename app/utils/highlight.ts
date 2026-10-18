import hljs from 'highlight.js/lib/common'

export interface HighlightedCode {
  /** HTML with highlight.js `<span class="hljs-…">` markup; the source is escaped. */
  value: string
  /** highlight.js language name, or an empty string when nothing could be detected. */
  language: string
}

/** GitHub language names that highlight.js knows under another name. */
const ALIASES: Record<string, string> = {
  'html': 'xml',
  'vue': 'xml',
  'svelte': 'xml',
  'shell': 'bash',
  'c++': 'cpp',
  'c#': 'csharp',
  'objective-c': 'objectivec',
}

/**
 * Highlights a code snippet. `language` is the name GitHub reports for the gist file ("TypeScript",
 * "HTML"…); when highlight.js knows it, the result is deterministic instead of relying on
 * auto-detection, which guessed wrong for short snippets (#22). Unknown languages fall back to it.
 */
export function highlightCode(content: string, language?: string | null): HighlightedCode {
  if (!content) return { value: '', language: '' }
  const known = resolveLanguage(language)
  if (known) {
    return { value: hljs.highlight(content, { language: known, ignoreIllegals: true }).value, language: known }
  }
  const auto = hljs.highlightAuto(content)
  return { value: auto.value, language: auto.language ?? '' }
}

function resolveLanguage(language?: string | null): string | undefined {
  if (!language) return undefined
  const name = language.toLowerCase()
  const candidate = ALIASES[name] ?? name
  return hljs.getLanguage(candidate) ? candidate : undefined
}
