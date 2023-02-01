<template>
    <div class="font-fira_retina text-white">
        <p>
            <span class="tag">
                const
            </span>
            <span class="tag-name">
                button
            </span>
                 = 
            <span class="tag-name">
                document.querySelector
                <span class="text-menu-text">
                    (
                        <span class="text-codeline-link">
                            '#sendBtn'
                        </span>
                    );
                </span>
             </span>
             
        </p>
        <br>
        <p class="text-menu-text">
            <span class="tag">
                const
            </span>
            <span class="tag-name">
                message
            </span>
            = { 
                <br> &nbsp;&nbsp;
            <span id="name" class="tag-name">
                name
            </span>
            :
	        <span id="name-value" class="text-codeline-link">
                "{{ name }}"
            </span> 
            , <br> &nbsp;&nbsp;
            <span id="email" class="tag-name">
                email
            </span>
	        :
            <span id="email-value" class="text-codeline-link">
                "{{ email }}"
            </span>
            , <br> &nbsp;&nbsp;
            <span id="message" class="tag-name">
                message
            </span>
            :
            <span class="text-codeline-link">"</span>
	        <span id="message-value" class="text-codeline-link">
                {{ message }}
            </span>
            <span class="text-codeline-link">"</span>
            , <br> &nbsp;&nbsp;
	        date: 
            <span class="text-codeline-link">
                "Thu 21 Apr"
            </span>
            <br>
            }
        </p>
        <br>
        <p>
            <span class="tag-name">
                button.addEventListener
            
                <span class="text-menu-text">
                    (
                        <span class="text-codeline-link">
                            'click'
                        </span>
                    ), () 
                    <span class="tag">
                        =>
                    </span>
                    {
                    <br>
                </span>
                    &nbsp;&nbsp;form.send
                    <span class="text-menu-text">(</span>
                        message
                    <span class="text-menu-text">); <br> })</span>
                </span>
            
        </p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        email: String,
        message: String,
    },
}
</script>

<style>
.tag {
    color: #C98BDF;
}

.tag-name{
    color: #5565E8;
}

.arrow {
    color: #F8F8F8;
}
</style>