import { describe, expect, it } from 'vitest'
import { getGistById, getGistComments } from '../app/utils/github-api'

describe('GitHub gists API', () => {
  const gistId = '799fe15f4b75706242b10d978e935067'

  it('returns the requested gist', async () => {
    const gist = await getGistById(gistId)

    expect(gist.id).toBe(gistId)
    expect(Object.keys(gist.files).length).toBeGreaterThan(0)
    expect(gist.owner.login).toBeTypeOf('string')
  })

  it('returns the gist comments as an array', async () => {
    const gist = await getGistById(gistId)
    const comments = await getGistComments(gist.comments_url)

    expect(Array.isArray(comments)).toBe(true)
  })

  it('throws on a non-existent gist', async () => {
    await expect(getGistById('does-not-exist')).rejects.toThrow(/404/)
  })
})
