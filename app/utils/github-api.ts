import type { Gist, GistComment } from '~/types/github'

const GITHUB_API = 'https://api.github.com'

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GitHub API responded ${response.status} for ${url}`)
  }
  return response.json() as Promise<T>
}

/** Get a gist from the GitHub API by its ID. */
export const getGistById = (gistId: string) => getJson<Gist>(`${GITHUB_API}/gists/${gistId}`)

/** Get the comments of a gist from its `comments_url`. */
export const getGistComments = (commentsUrl: string) => getJson<GistComment[]>(commentsUrl)
