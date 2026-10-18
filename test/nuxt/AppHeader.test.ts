import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHeader from '~/components/AppHeader.vue'

describe('AppHeader', () => {
  it('is a labelled navigation landmark with the logo and the four pages', async () => {
    const wrapper = await mountSuspended(AppHeader)

    expect(wrapper.find('nav').attributes('aria-label')).toBe('Main')
    expect(wrapper.find('#nav-logo').text()).toBe(developerConfig.logo_name)

    const hrefs = wrapper.findAll('.nav-link, #nav-link-contact').map(a => a.attributes('href'))
    expect(hrefs).toEqual(['/', '/about-me', '/projects', '/contact-me'])
  })

  it('links to the source repository', async () => {
    const wrapper = await mountSuspended(AppHeader)

    const corner = wrapper.find('a.github-corner')
    expect(corner.attributes('href')).toBe('https://github.com/alexdeploy/developer-portfolio-v2')
    expect(corner.attributes('aria-label')).toBe('View source on Github')
  })
})
