/*
 * GENERATED FILE. Do not edit by hand.
 * Source: developer.schema.json. Regenerate with `yarn schema:types`.
 */

/**
 * Content of the portfolio. Everything the site shows about you lives in developer.json and must follow this schema.
 */
export interface DeveloperConfig {
  /**
   * Path or URL of this schema, so that your editor can validate and autocomplete developer.json.
   */
  $schema?: string
  /**
   * Your full name. Shown on the home page and in the browser title.
   */
  name: string
  /**
   * Short name shown as the logo in the header, e.g. "john-doe".
   */
  logo_name: string
  /**
   * Your role, typed out on the home page, e.g. "Front-end developer".
   */
  role: string
  /**
   * Metadata for the <head>, the social sharing cards and the web app manifest. Every field is optional and has a sensible default.
   */
  site?: {
    /**
     * Public URL where the site is deployed, including any base path and without a trailing slash, e.g. "https://jane.dev". Used for the canonical link, og:url and to turn the sharing image into an absolute URL. Leave it out until the site is deployed.
     */
    url?: string
    /**
     * Browser tab and sharing title of the home page. Defaults to "<name> | <role>".
     */
    title?: string
    /**
     * Meta description shown by search engines and sharing cards. Defaults to "Portfolio of <name>, <role>."
     */
    description?: string
    /**
     * Image shown when a link to the site is shared (1200x630 px recommended): a path under public/ or an absolute URL. Defaults to "/demo-share.jpg".
     */
    image?: string
    /**
     * Language of the content as a BCP 47 tag, e.g. "en" or "es-ES". Defaults to "en".
     */
    lang?: string
  }
  about: {
    /**
     * Sections of the about page, keyed by their slug. The key must match the section title.
     */
    sections: {
      [k: string]: AboutSection
    }
  }
  contacts: {
    /**
     * Where the contact form sends its messages. Without this block, submitting opens the visitor's mail app with the message addressed to the "email" of the direct sources.
     */
    form?: {
      /**
       * Endpoint that receives the message as a form-encoded POST with the fields name, email and message (sent with Accept: application/json) and answers 2xx on success: a Formspree form such as "https://formspree.io/f/<id>", a similar service, or an endpoint of your own.
       */
      action: string
    }
    direct: {
      /**
       * Title of the direct contacts block, e.g. "contacts".
       */
      title: string
      /**
       * Direct contact channels keyed by icon name: the key "email" renders /icons/email.svg, "phone" renders /icons/phone.svg.
       */
      sources: {
        [k: string]: string
      }
    }
    /**
     * Social profiles shown in the footer.
     */
    social: {
      github: SocialLink
      facebook: SocialLink
      twitter: SocialLink
    }
    find_me_also_in: {
      /**
       * Title of the block, e.g. "find-me-also-in".
       */
      title: string
      /**
       * Other profiles, keyed by a slug of your choice.
       */
      sources: {
        [k: string]: SocialLink
      }
    }
  }
  /**
   * Public GitHub gist IDs shown as code snippets on the about page, keyed by display order.
   */
  gists: {
    /**
     * The ID of a public gist: the hexadecimal part of its URL, https://gist.github.com/<user>/<id>.
     */
    [k: string]: string
  }
  /**
   * Projects shown on the projects page, keyed by display order.
   */
  projects: {
    [k: string]: Project
  }
}
export interface AboutSection {
  /**
   * Section slug. Must match the key.
   */
  title: string
  /**
   * Icon path under public/, starting with a slash, e.g. "/icons/info-personal.svg".
   */
  icon: string
  /**
   * Folders of the section, keyed by their slug.
   */
  info: {
    [k: string]: AboutFolder
  }
}
/**
 * A folder inside an about section. Its key is the label shown in the menu.
 */
export interface AboutFolder {
  /**
   * Folder slug. Must match the key.
   */
  title: string
  /**
   * Text shown as a code comment when the folder is selected. Basic HTML such as <br> is allowed.
   */
  description: string
  /**
   * Optional files listed under the folder, keyed by file name. The value is the text shown instead of the folder description when the file is clicked. Basic HTML such as <br> is allowed.
   */
  files?: {
    [k: string]: string
  }
}
export interface SocialLink {
  /**
   * Label of the link, e.g. "Github profile".
   */
  title: string
  /**
   * Base URL of the service, ending with a slash, e.g. "https://github.com/".
   */
  url: string
  /**
   * Your user name on that service. The link is url + user.
   */
  user: string
}
export interface Project {
  /**
   * Project name, e.g. "_ui-animations".
   */
  title: string
  /**
   * Short description shown on the card.
   */
  description: string
  /**
   * Image path under public/, starting with a slash, or an absolute URL.
   */
  img: string
  /**
   * Technologies used. Each one needs an icon in public/icons/techs/ and public/icons/techs/filled/ named in lowercase, e.g. "React" uses react.svg.
   */
  tech: string[]
  /**
   * Link opened by the view-project button.
   */
  url: string
}
