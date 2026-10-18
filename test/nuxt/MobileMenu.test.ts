import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MobileMenu from '~/components/MobileMenu.vue'

describe('MobileMenu', () => {
  it('shows the logo name from developer.json', async () => {
    const wrapper = await mountSuspended(MobileMenu)

    expect(wrapper.find('#mobile-header a').text()).toBe(developerConfig.logo_name)
  })

  it('opens and closes the menu with an accessible toggle button', async () => {
    const wrapper = await mountSuspended(MobileMenu)
    const toggle = wrapper.find('#mobile-header button')
    const menu = wrapper.find('#menu')

    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(toggle.attributes('aria-label')).toBe('Open menu')
    expect(menu.classes()).toContain('hidden')

    await toggle.trigger('click')

    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(toggle.attributes('aria-label')).toBe('Close menu')
    expect(menu.classes()).not.toContain('hidden')

    await toggle.trigger('click')
    expect(menu.classes()).toContain('hidden')
  })

  it('links to the four pages', async () => {
    const wrapper = await mountSuspended(MobileMenu)

    const hrefs = wrapper.findAll('#menu a').map(a => a.attributes('href'))
    expect(hrefs).toEqual(['/', '/about-me', '/projects', '/contact-me'])
  })
})
