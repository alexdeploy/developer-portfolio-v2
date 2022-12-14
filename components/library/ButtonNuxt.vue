<template>
    <NuxtLink :to="to" class="my-10 font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative bg-gray-200 text-gray-dark dark:text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2">
        <!---->
        <span class="text-left break-all line-clamp-1 mx-2">
            {{ value }}
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.3 17.275q-.3-.3-.288-.725q.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713q0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275q-.413 0-.713-.3Z"/></svg>
        
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