import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FormContentCode from '~/components/FormContentCode.vue'

describe('FormContentCode', () => {
  it('mirrors the form values and today\'s date in the code preview', async () => {
    const wrapper = await mountSuspended(FormContentCode, {
      props: { name: 'Alex', email: 'alex@example.com', message: 'Hola!' },
    })

    expect(wrapper.find('#name-value').text()).toBe('Alex')
    expect(wrapper.find('#email-value').text()).toBe('alex@example.com')
    expect(wrapper.find('#message-value').text()).toBe('Hola!')
    expect(wrapper.text()).toContain(new Date().toDateString())
  })

  it('hides the decorative line numbers from assistive technology', async () => {
    const wrapper = await mountSuspended(FormContentCode)

    expect(wrapper.find('.line-numbers').attributes('aria-hidden')).toBe('true')
  })
})
