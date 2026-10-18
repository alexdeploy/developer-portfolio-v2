import { describe, expect, it, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import AboutMePage from '~/pages/about-me.vue'

// Gists come from the network: keep the page test offline.
mockNuxtImport('getGistById', () => vi.fn().mockRejectedValue(new Error('offline')))
mockNuxtImport('getGistComments', () => vi.fn().mockResolvedValue([]))

describe('about-me page', () => {
  it('starts on personal-info / bio and switches section and folder from the menu', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = await mountSuspended(AboutMePage)
    const title = () => wrapper.find('.section-content-title p').text()

    expect(title()).toBe('personal-info')
    expect(wrapper.find('button.section-icon[aria-label="personal-info"]').attributes('aria-pressed')).toBe('true')

    await wrapper.find('button.section-icon[aria-label="professional-info"]').trigger('click')
    expect(title()).toBe('professional-info')
    expect(wrapper.find('#tab-mobile h3:last-child').text()).toBe('experience')

    const hardSkills = wrapper.findAll('button[aria-pressed]').find(b => b.text() === 'hard-skills')
    await hardSkills?.trigger('click')
    expect(hardSkills?.attributes('aria-pressed')).toBe('true')
    expect(wrapper.find('#tab-mobile h3:last-child').text()).toBe('hard-skills')
  })

  it('expands mobile sections and the contacts block with aria-expanded buttons', async () => {
    const wrapper = await mountSuspended(AboutMePage)
    const section = wrapper.find('button.section-content-title[aria-controls="folders-hobbies-info"]')
    const panel = () => wrapper.find('#folders-hobbies-info').element as HTMLElement

    expect(section.attributes('aria-expanded')).toBe('false')
    expect(panel().style.display).toBe('none')
    await section.trigger('click')
    expect(section.attributes('aria-expanded')).toBe('true')
    expect(panel().style.display).not.toBe('none')

    const contacts = wrapper.find('button[aria-controls="contacts"]')
    await contacts.trigger('click')
    expect(contacts.attributes('aria-expanded')).toBe('true')
  })

  it('links direct contacts with mailto: and tel:', async () => {
    const wrapper = await mountSuspended(AboutMePage)

    const hrefs = wrapper.findAll('#contact-sources a').map(a => a.attributes('href'))
    expect(hrefs.some(h => h?.startsWith('mailto:'))).toBe(true)
    expect(hrefs.some(h => h?.startsWith('tel:'))).toBe(true)
  })
})
