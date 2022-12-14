<template>
    <NuxtLink :to="to" class="my-10 font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative bg-gray-200 text-gray-dark dark:text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2">
        <!---->
        <span class="text-left break-all line-clamp-1">
            {{ value }}
        </span>
        <!---->
    </NuxtLink>
</template>

<script>
export default {
    name: 'ButtonNuxt',
    props: {
        value: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
    }

}
</script>

<style>
.gradient-border-2 {
    border: 2px solid transparent;
}

.border-gradient-br-gradient-gray-900 {
    background: linear-gradient(90deg,#18181b,#18181b),linear-gradient(to bottom right,#00dc82,#36e4da,#16a79e);
    background-clip: padding-box,border-box;
    background-origin: padding-box,border-box;
}
</style>