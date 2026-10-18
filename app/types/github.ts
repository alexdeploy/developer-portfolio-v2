/** Subset of the GitHub REST API types used by the portfolio. */
export interface GistOwner {
  login: string
  avatar_url: string
  html_url: string
}

export interface GistFile {
  filename: string
  language: string | null
  content: string
  raw_url: string
  size: number
}

export interface Gist {
  id: string
  html_url: string
  description: string | null
  created_at: string
  updated_at: string
  comments: number
  comments_url: string
  files: Record<string, GistFile>
  owner: GistOwner
}

export interface GistComment {
  id: number
  body: string
  created_at: string
  user: GistOwner
}
