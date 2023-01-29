<template>
    <footer class="hidden md:flex w-full h-12 justify-between">

        <!-- socials -->

        <div id="social" class="flex text-sm h-full items-center">
            <p class="text-menu-text font-fira_retina px-6 h-full flex items-center">find me in:</p>
            <NuxtLink to="https://twitter.com/alexdeploy" class="h-full flex justify-center">
                <Icon name="ph:twitter-logo-fill" class="w-5 h-5 mx-4 my-auto text-hello-gray" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/alexsrueda" class="h-full flex justify-center">
                <Icon name="ph:linkedin-logo-fill" class="w-5 h-5 my-auto mx-4 text-hello-gray" />
            </NuxtLink>
            <NuxtLink to="https://instagram.com/alexdeploy" class="h-full flex justify-center">
                <Icon name="ph:instagram-logo-fill" class="w-5 h-5 my-auto mx-4 text-hello-gray" />
            </NuxtLink>
        </div>

        <!-- github -->
        <div class="flex justify-end text-sm h-full items-center">
            <NuxtLink to="/" class="text-menu-text font-fira_retina pl-6 h-full flex items-center justify-end">
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
