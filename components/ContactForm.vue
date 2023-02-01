<template>
    <form id="contact-form" class="mx-8 my-16 text-sm self-center w-4/5 max-w-lg">
        <div class="flex flex-col">
            <label for="name" class="mb-3">_name:</label>
            <input type="text" id="name-input" name="name" :placeholder="name" class="p-2 mb-5 placeholder-slate-600" required>
        </div>
        <div class="flex flex-col">
            <label for="email" class="mb-3">_email:</label>
            <input type="email" id="email-input" name="email" :placeholder="email" class="p-2 mb-5 placeholder-slate-600" required>
        </div>
        <div class="flex flex-col">
            <label for="message" class="mb-3">_message:</label>
            <textarea id="message-input" name="message" :placeholder="message" class="placeholder-slate-600" required></textarea>
        </div>
        <button id="submit-button" type="submit" class="py-2 px-4">submit-message</button>
    </form>
</template>

<script>


export default {
    name: 'ContactForm',
    props: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    methods: {

    }

}
</script>

<style>

form {
    @apply font-fira_retina text-menu-text
}
input {
    background-color: #011221;
    border: 1px solid #1E2D3D;
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
  border: 1px solid #1E2D3D;
  -webkit-text-fill-color: rgb(190, 190, 190);
  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
  transition: background-color 5000s ease-in-out 0s;
}

#message-input {
    background-color: #011221;
    border: 1px solid #1E2D3D;
    border-radius: 7px;
    resize: none;
    height: 150px;
    padding: 10px;
}

#submit-button {
    @apply font-fira_retina text-white text-sm;
    background-color: #1E2D3D;
    border-radius: 7px;
    margin-top: 20px;
    cursor: pointer;
}

input:focus, #message-area:focus {
    outline: none;
    transition: none;
    box-shadow: 0 0 10px #607B96;
  }
</style>