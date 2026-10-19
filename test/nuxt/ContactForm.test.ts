import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContactForm from '~/components/ContactForm.vue'
import { mailtoHref } from '~/utils/contact'

const filled = { name: 'Alex', email: 'alex@example.com', message: 'Hola!' }

describe('ContactForm', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('reports every field through v-model', async () => {
    const wrapper = await mountSuspended(ContactForm, { props: { name: '', email: '', message: '' } })

    await wrapper.find('#name-input').setValue('Alex')
    await wrapper.find('#email-input').setValue('alex@example.com')
    await wrapper.find('#message-input').setValue('Hola!')

    expect(wrapper.emitted('update:name')?.at(-1)).toEqual(['Alex'])
    expect(wrapper.emitted('update:email')?.at(-1)).toEqual(['alex@example.com'])
    expect(wrapper.emitted('update:message')?.at(-1)).toEqual(['Hola!'])
  })

  it('labels every field and does not navigate on submit', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = await mountSuspended(ContactForm)

    for (const id of ['name-input', 'email-input', 'message-input']) {
      expect(wrapper.find(`label[for="${id}"]`).exists()).toBe(true)
    }

    const submit = new Event('submit', { cancelable: true })
    const notPrevented = wrapper.find('form').element.dispatchEvent(submit)
    expect(notPrevented).toBe(false)
  })

  it('posts the fields to the configured endpoint and shows the success panel', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 })
    vi.stubGlobal('fetch', fetchMock)
    const wrapper = await mountSuspended(ContactForm, { props: { action: 'https://formspree.io/f/abc', ...filled }, attachTo: document.body })

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://formspree.io/f/abc')
    expect(init.method).toBe('POST')
    expect(init.headers).toEqual({ Accept: 'application/json' })
    expect(Object.fromEntries(init.body as URLSearchParams)).toEqual(filled)

    expect(wrapper.find('form').exists()).toBe(false)
    const panel = wrapper.find('#form-sent')
    expect(panel.text()).toContain('Thank you!')
    expect(panel.text()).toContain('Your message has been accepted')
    expect(panel.attributes('role')).toBe('status')
    expect(document.activeElement).toBe(panel.element)

    await panel.find('button').trigger('click')
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.emitted('update:name')?.at(-1)).toEqual([''])
    expect(wrapper.emitted('update:message')?.at(-1)).toEqual([''])
    wrapper.unmount()
  })

  it('keeps the form and explains when the endpoint fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }))
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = await mountSuspended(ContactForm, { props: { action: '/api/contact', fallbackEmail: 'me@example.com', ...filled } })

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(wrapper.find('form').exists()).toBe(true)
    const error = wrapper.find('#form-error')
    expect(error.attributes('role')).toBe('alert')
    expect(error.text()).toContain('could not be sent')
    expect(error.find('a').attributes('href')).toBe('mailto:me@example.com')
    expect(wrapper.find('#submit-button').attributes('disabled')).toBeUndefined()
    expect(consoleError).toHaveBeenCalledWith('Could not send the contact form', expect.any(Error))
  })

  it('opens the mail app with the message when no endpoint is configured', async () => {
    const assign = vi.spyOn(window.location, 'assign').mockImplementation(() => {})
    const wrapper = await mountSuspended(ContactForm, { props: { fallbackEmail: 'me@example.com', ...filled } })

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(assign).toHaveBeenCalledWith(mailtoHref('me@example.com', filled))
    expect(wrapper.find('#form-sent').text()).toContain('mail app')
    expect(wrapper.find('#form-sent').text()).toContain('me@example.com')
  })

  it('reports an error when there is no endpoint and no email either', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    const wrapper = await mountSuspended(ContactForm, { props: filled })

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(wrapper.find('#form-error').text()).toBe('The message could not be sent.')
    expect(consoleError).toHaveBeenCalledWith(expect.stringContaining('contacts.form.action'))
  })
})
