<template>
    
    <section id="about" class="w-full h-full lg:flex">

        <PageMenu id="page-menu"/>

        <div class="flex flex-col w-full">

        <!-- windows tab -->
        <div class="tab-height w-full hidden lg:flex border-right border-bot items-center">

            <div class="flex items-center border-right h-full">
                <p class="font-fira_regular text-menu-text text-sm px-3">contacts</p>
                <img src="public/icons/close.svg" alt="" class="m-3">
            </div>

        </div>

        <!-- main -->
        <div class="flex lg:grid lg:grid-cols-2 h-full w-full">
    
            <div id="left" class="h-full w-full flex flex-col border-right">
                
                <ContactForm :name="name" :email="email" :message="message" />

            </div>

        <div id="right" class="h-full w-full hidden lg:flex flex-col">
            

            <div class="h-full w-full border-right flex">
            
            <div class="w-full h-full p-20">
                <CodeArea :name="name" :email="email" :message="message" />
            </div>
            <!-- scroll bar -->
            <div id="scroll-bar" class="h-full border-left flex justify-center py-1">
                <div id="scroll">

                </div>
            </div>
            </div>
        
        </div>
    </div>

</div>
</section>
</template>

<script>
export default {
    data() {
        return {
            name: 'Jonathan Davis',
            email: 'jonathan-davis@gmail.com',
            message: 'Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!',
        }
    },
    mounted(){

        /* get input with id = name */
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const messageInput = document.getElementById('message-input');

        
        nameInput.addEventListener('input', (event) => {
            
            const nameValue = document.getElementById('name-value')
            nameValue.innerHTML = event.target.value;

        })

        emailInput.addEventListener('input', (event) => {
            
            const emailValue = document.getElementById('email-value')
            emailValue.innerHTML = event.target.value;

        })

        messageInput.addEventListener('input', (event) => {
            
            const messageValue = document.getElementById('message-value')
            messageValue.innerHTML = event.target.value;

        })
    },
    methods: {

    }
}
</script>

<style>

</style>