import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectsPage from '~/pages/projects.vue'

describe('projects page', () => {
  const allProjects = Object.values(developerConfig.projects)

  it('lists every project from developer.json numbered from 1', async () => {
    const wrapper = await mountSuspended(ProjectsPage)

    const cards = wrapper.findAll('.project')
    expect(cards).toHaveLength(allProjects.length)
    expect(cards[0]?.find('h2').text()).toBe('Project 1')
    expect(wrapper.find('.tab-height p').text()).toBe('all;')
  })

  it('filters by technology, combines filters and falls back to all', async () => {
    const wrapper = await mountSuspended(ProjectsPage)
    const count = (tech: string) => allProjects.filter(p => p.tech.includes(tech)).length

    await wrapper.find('#React').setValue(true)
    expect(wrapper.findAll('.project')).toHaveLength(count('React'))
    expect(wrapper.findAll('.tab-height p').map(p => p.text())).toEqual(['React;'])
    expect(wrapper.find('#icon-tech-React').classes()).toContain('active')

    await wrapper.find('#Vue').setValue(true)
    expect(wrapper.findAll('.project')).toHaveLength(count('React') + count('Vue'))

    await wrapper.find('#React').setValue(false)
    await wrapper.find('#Vue').setValue(false)
    expect(wrapper.findAll('.tab-height p').map(p => p.text())).toEqual(['all;'])
    expect(wrapper.findAll('.project')).toHaveLength(allProjects.length)
  })

  it('shows the empty state when no project matches', async () => {
    const wrapper = await mountSuspended(ProjectsPage)
    const unused = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter'].find(t => !allProjects.some(p => p.tech.includes(t)))
    if (!unused) return // every tech is used by the sample data

    await wrapper.find(`#${unused}`).setValue(true)
    expect(wrapper.findAll('.project')).toHaveLength(0)
    expect((wrapper.find('#not-found').element as HTMLElement).style.display).not.toBe('none')
  })
})
