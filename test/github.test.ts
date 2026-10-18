import { afterEach, describe, expect, it, vi } from 'vitest'
import { getGistById, getGistComments } from '../app/utils/github-api'

function mockFetch(status: number, body: unknown) {
  const fetchMock = vi.fn(async () =>
    new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } }),
  )
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('getGistById', () => {
  it('requests the gist by id and returns the parsed JSON', async () => {
    const fetchMock = mockFetch(200, { id: 'abc123', files: { 'main.ts': { content: 'const a = 1' } } })

    const gist = await getGistById('abc123')

    expect(fetchMock).toHaveBeenCalledWith('https://api.github.com/gists/abc123')
    expect(gist.id).toBe('abc123')
    expect(gist.files['main.ts']?.content).toBe('const a = 1')
  })

  it('throws with the HTTP status when the API fails', async () => {
    mockFetch(404, { message: 'Not Found' })

    await expect(getGistById('missing')).rejects.toThrow('404')
  })
})

describe('getGistComments', () => {
  it('fetches the given comments URL and returns the list', async () => {
    const fetchMock = mockFetch(200, [{ id: 1, body: 'Nice snippet' }])

    const comments = await getGistComments('https://api.github.com/gists/abc123/comments')

    expect(fetchMock).toHaveBeenCalledWith('https://api.github.com/gists/abc123/comments')
    expect(comments).toHaveLength(1)
    expect(comments[0]?.body).toBe('Nice snippet')
  })
})
