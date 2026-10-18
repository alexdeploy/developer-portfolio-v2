import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from '~/components/ProjectCard.vue'
import type { Project } from '~/types/developer'

const project: Project = {
  title: '_demo-app',
  description: 'A demo project.',
  img: '/images/projects/demo.png',
  tech: ['React', 'CSS'],
  url: 'https://example.com/demo',
}

describe('ProjectCard', () => {
  it('numbers the project from its index and shows its title and description', async () => {
    const wrapper = await mountSuspended(ProjectCard, { props: { project, index: 2 } })

    expect(wrapper.find('h2').text()).toBe('Project 3')
    expect(wrapper.find('h3').text()).toContain('_demo-app')
    expect(wrapper.text()).toContain('A demo project.')
  })

  it('uses lowercase icon files and meaningful alt text for each tech', async () => {
    const wrapper = await mountSuspended(ProjectCard, { props: { project, index: 0 } })

    const icons = wrapper.findAll('img').filter(img => img.attributes('src')?.includes('/icons/techs/'))
    expect(icons.map(img => img.attributes('src'))).toEqual(['/icons/techs/filled/react.svg', '/icons/techs/filled/css.svg'])
    expect(icons.map(img => img.attributes('alt'))).toEqual(['React', 'CSS'])
    expect(wrapper.find('#showcase').attributes('alt')).toBe('_demo-app')
  })

  it('links to the project in a new tab, safely and with an accessible name', async () => {
    const wrapper = await mountSuspended(ProjectCard, { props: { project, index: 0 } })

    const link = wrapper.find('a#view-button')
    expect(link.attributes('href')).toBe('https://example.com/demo')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
    expect(link.attributes('aria-label')).toBe('View project _demo-app')
  })
})
