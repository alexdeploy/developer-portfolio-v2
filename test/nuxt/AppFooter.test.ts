import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppFooter from '~/components/AppFooter.vue'

describe('AppFooter', () => {
  it('links to the social profiles built from url + user', async () => {
    const wrapper = await mountSuspended(AppFooter)
    const { twitter, facebook, github } = developerConfig.contacts.social

    const hrefs = wrapper.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).toContain(twitter.url + twitter.user)
    expect(hrefs).toContain(facebook.url + facebook.user)
    expect(hrefs).toContain(github.url + github.user)
    expect(wrapper.text()).toContain(`@${github.user}`)
  })

  it('opens external profiles in a new tab without leaking the opener', async () => {
    const wrapper = await mountSuspended(AppFooter)

    for (const link of wrapper.findAll('a')) {
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toContain('noopener')
    }
  })
})
