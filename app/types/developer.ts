/**
 * Shape of `developer.json`, the single file users edit to customise the portfolio.
 */
export interface AboutFolder {
  title: string
  description: string
  /** Optional markdown-like files shown under the folder, keyed by file name. */
  files?: Record<string, string>
}

export interface AboutSection {
  title: string
  icon: string
  info: Record<string, AboutFolder>
}

export interface Project {
  title: string
  description: string
  img: string
  tech: string[]
  url: string
}

export interface SocialLink {
  title: string
  url: string
  user: string
}

export interface DeveloperConfig {
  name: string
  logo_name: string
  role: string
  about: {
    sections: Record<string, AboutSection>
  }
  contacts: {
    direct: {
      title: string
      sources: Record<string, string>
    }
    social: {
      github: SocialLink
      facebook: SocialLink
      twitter: SocialLink
    }
    find_me_also_in: {
      title: string
      sources: Record<string, SocialLink>
    }
  }
  /** GitHub gist IDs shown on the about page, keyed by display order. */
  gists: Record<string, string>
  projects: Record<string, Project>
}
