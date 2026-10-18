import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ContactForm from '~/components/ContactForm.vue'

describe('ContactForm', () => {
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
    const wrapper = await mountSuspended(ContactForm)

    for (const id of ['name-input', 'email-input', 'message-input']) {
      expect(wrapper.find(`label[for="${id}"]`).exists()).toBe(true)
    }

    const submit = new Event('submit', { cancelable: true })
    const notPrevented = wrapper.find('form').element.dispatchEvent(submit)
    expect(notPrevented).toBe(false)
  })
})
