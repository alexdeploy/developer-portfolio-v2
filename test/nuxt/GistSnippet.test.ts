import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import GistSnippet from '~/components/GistSnippet.vue'
import type { Gist } from '~/types/github'

const { getGistById, getGistComments } = vi.hoisted(() => ({
  getGistById: vi.fn(),
  getGistComments: vi.fn(),
}))
mockNuxtImport('getGistById', () => getGistById)
mockNuxtImport('getGistComments', () => getGistComments)

const gist: Gist = {
  id: 'abc123',
  html_url: 'https://gist.github.com/alex/abc123',
  description: null,
  created_at: new Date(Date.now() - 1000 * 3600 * 24 * 65).toISOString(),
  updated_at: new Date().toISOString(),
  comments: 1,
  comments_url: 'https://api.github.com/gists/abc123/comments',
  files: { 'demo.ts': { filename: 'demo.ts', language: 'TypeScript', content: 'const answer: number = 42', raw_url: '', size: 25 } },
  owner: { login: 'alex', avatar_url: 'https://avatars.example/alex.png', html_url: 'https://github.com/alex' },
}

describe('GistSnippet', () => {
  beforeEach(() => {
    getGistById.mockReset().mockResolvedValue(gist)
    getGistComments.mockReset().mockResolvedValue([{ id: 1, body: 'Nice one', created_at: '', user: gist.owner }])
  })

  it('loads the gist by id and renders owner, age and highlighted code', async () => {
    const wrapper = await mountSuspended(GistSnippet, { props: { id: 'abc123' } })
    await flushPromises()

    expect(getGistById).toHaveBeenCalledWith('abc123')
    expect(wrapper.find('#username').text()).toBe('@alex')
    expect(wrapper.text()).toContain('Created 2 months ago')
    const code = wrapper.find('pre code')
    expect(code.text()).toBe('const answer: number = 42')
    expect(code.html()).toContain('hljs-')
    expect(wrapper.find('pre').attributes('aria-label')).toBe('Code snippet: demo.ts')
  })

  it('toggles the first comment with an accessible details button', async () => {
    const wrapper = await mountSuspended(GistSnippet, { props: { id: 'abc123' } })
    await flushPromises()

    const details = wrapper.find('button[aria-expanded]')
    const panel = () => wrapper.find('.comment').element.parentElement as HTMLElement
    expect(details.attributes('aria-expanded')).toBe('false')
    expect(panel().style.display).toBe('none')

    await details.trigger('click')
    expect(details.attributes('aria-expanded')).toBe('true')
    expect(panel().style.display).not.toBe('none')
    expect(wrapper.find('.comment').text()).toBe('Nice one')

    await wrapper.find('button[aria-label="Close comment"]').trigger('click')
    expect(panel().style.display).toBe('none')
  })

  it('renders nothing and logs when the gist cannot be loaded', async () => {
    getGistById.mockRejectedValue(new Error('GitHub API responded 403'))
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const wrapper = await mountSuspended(GistSnippet, { props: { id: 'missing' } })
    await flushPromises()

    expect(wrapper.find('.gist').exists()).toBe(false)
    expect(consoleError).toHaveBeenCalledWith(expect.stringContaining('missing'), expect.any(Error))
    consoleError.mockRestore()
  })
})
