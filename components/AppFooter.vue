<template>
    <footer class="flex w-full h-12 justify-between">

        <!-- social -->
        <div class="flex text-sm h-full items-center border-right justify-end">
            <p class="text-menu-text font-fira_retina px-6 h-full flex items-center justify-start">find me in:</p>
            <NuxtLink to="https://twitter.com/alexdeploy" target="_blank" class="h-full flex justify-center">
                <Icon name="ph:twitter-logo-fill" class="w-5 h-5 mx-4 my-auto text-hello-gray/60" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/alexsrueda" target="_blank" class="h-full flex justify-center">
                <Icon name="ph:linkedin-logo-fill" class="w-5 h-5 my-auto mx-4 text-hello-gray/60" />
            </NuxtLink>
            <NuxtLink to="https://instagram.com/alexdeploy" target="_blank" class="h-full flex justify-center">
                <Icon name="ph:instagram-logo-fill" class="w-5 h-5 my-auto mx-4 text-hello-gray/60 " />
            </NuxtLink>
        </div>

        <!-- github -->
        <div class="hidden md:flex justify-end text-sm h-full items-center">
            <NuxtLink to="/" target="_blank" class="text-menu-text font-fira_retina pl-6 h-full flex items-center justify-end">
                @alexdeploy
                <Icon name="ri:github-fill" class="w-5 h-5 mx-3 text-hello-gray" />
            </NuxtLink>

        </div>
    </footer>
</template>

<style>

footer {
    border-top: 1px solid #1E2D3D;
}
 footer a {
    border-left: 1px solid #1E2D3D;
 }

 footer a:hover {
    background-color: #1E2D3D;
 }

</style>
