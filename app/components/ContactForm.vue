<script setup lang="ts">
const props = defineProps<{
  /** Endpoint that receives the message (contacts.form.action). Without it the visitor's mail app is opened instead. */
  action?: string
  /** Address of the mail-app fallback, also offered when sending fails. */
  fallbackEmail?: string
}>()

const name = defineModel<string>('name', { default: '' })
const email = defineModel<string>('email', { default: '' })
const message = defineModel<string>('message', { default: '' })

type Status = 'idle' | 'sending' | 'sent' | 'error'
const status = ref<Status>('idle')
const sentBy = ref<'endpoint' | 'mail'>('endpoint')
const sentPanel = ref<HTMLElement | null>(null)

async function onSubmit() {
  if (status.value === 'sending') return
  const fields = { name: name.value, email: email.value, message: message.value }

  if (props.action) {
    status.value = 'sending'
    try {
      const response = await fetch(props.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(fields),
      })
      if (!response.ok) throw new Error(`The form endpoint responded ${response.status}`)
      await markSent('endpoint')
    }
    catch (error) {
      console.error('Could not send the contact form', error)
      status.value = 'error'
    }
    return
  }

  if (props.fallbackEmail) {
    window.location.assign(mailtoHref(props.fallbackEmail, fields))
    await markSent('mail')
    return
  }

  console.error('The contact form has nowhere to send the message: set contacts.form.action or an "email" direct source in developer.json.')
  status.value = 'error'
}

async function markSent(by: 'endpoint' | 'mail') {
  sentBy.value = by
  status.value = 'sent'
  await nextTick()
  sentPanel.value?.focus()
}

function reset() {
  name.value = ''
  email.value = ''
  message.value = ''
  status.value = 'idle'
}
</script>

<template>
  <form
    v-if="status !== 'sent'"
    id="contact-form"
    class="text-sm"
    @submit.prevent="onSubmit"
  >
    <div class="flex flex-col">
      <label
        for="name-input"
        class="mb-3"
      >_name:</label>
      <input
        id="name-input"
        v-model="name"
        type="text"
        name="name"
        class="p-2 mb-5 placeholder-slate-600"
        required
      >
    </div>
    <div class="flex flex-col">
      <label
        for="email-input"
        class="mb-3"
      >_email:</label>
      <input
        id="email-input"
        v-model="email"
        type="email"
        name="email"
        class="p-2 mb-5 placeholder-slate-600"
        required
      >
    </div>
    <div class="flex flex-col">
      <label
        for="message-input"
        class="mb-3"
      >_message:</label>
      <textarea
        id="message-input"
        v-model="message"
        name="message"
        class="placeholder-slate-600"
        required
      />
    </div>
    <button
      id="submit-button"
      type="submit"
      class="form-button py-2 px-4"
      :disabled="status === 'sending'"
    >
      {{ status === 'sending' ? 'sending...' : 'submit-message' }}
    </button>
    <p
      v-if="status === 'error'"
      id="form-error"
      role="alert"
      class="text-codeline-link mt-4"
    >
      The message could not be sent.
      <template v-if="fallbackEmail">
        Write to <a
          :href="`mailto:${fallbackEmail}`"
          class="underline"
        >{{ fallbackEmail }}</a> instead.
      </template>
    </p>
  </form>

  <!-- success state (#13): replaces the form until the visitor asks for a new one -->
  <div
    v-else
    id="form-sent"
    ref="sentPanel"
    tabindex="-1"
    role="status"
    class="flex flex-col items-center text-center font-fira_retina outline-none"
  >
    <p class="text-white text-2xl mb-3">
      Thank you! 🤘
    </p>
    <p class="text-menu-text text-sm mb-6">
      <template v-if="sentBy === 'mail'">
        Your mail app should now have the message ready to send. If it did not open, write to {{ fallbackEmail }}.
      </template>
      <template v-else>
        Your message has been accepted. You will receive an answer really soon!
      </template>
    </p>
    <button
      type="button"
      class="form-button py-2 px-4"
      @click="reset"
    >
      send-new-message
    </button>
  </div>
</template>

<style>
@reference "../assets/tailwind.css";

form {
    @apply font-fira_retina text-menu-text
}
input {
    background-color: #011221;
    border: 2px solid #1E2D3D;
    border-radius: 7px;

}
/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: rgb(190, 190, 190);
  transition: background-color 5000s ease-in-out 0s;
  border: 2px solid #607b96;
}

#message-input {
    background-color: #011221;
    border: 2px solid #1E2D3D;
    border-radius: 7px;
    resize: none;
    height: 150px;
    padding: 10px;
}

.form-button {
    @apply font-fira_retina text-white text-sm;
    background-color: #1E2D3D;
    border-radius: 7px;
    margin-top: 20px;
    cursor: pointer;
}

.form-button:hover:not(:disabled) {
    background-color: #263B50;
}

.form-button:disabled {
    cursor: progress;
    opacity: 0.7;
}

input:focus, #message-input:focus {
    outline: none;
    transition: none;
    border: 2px solid #607b96;
    box-shadow: #607b9669 0px 0px 0px 2px;
  }

#contact-form, #form-sent {
    max-width: 370px;
    width: 100%;
}

@media (max-width: 1920px) {
    #contact-form, #form-sent {
        max-width: 320px;
        max-height: 400px;
    }
    .form-button {
        /* width: 100%; */
        font-size: 12px;
    }
    textarea {
        font-size: 13px;
        max-height: 130px !important;
    }
    input {
        font-size: 13px;
    }
}
</style>
