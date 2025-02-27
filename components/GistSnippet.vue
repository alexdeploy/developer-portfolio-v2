<template>
    <div class="gist mb-5" v-if="dataFetched">
        
        <!-- head info -->
        <div class="flex justify-between my-2">

            <div class="flex">
                <!-- avatar -->
                <img :src="gist.owner.avatar_url" alt="" class="w-8 h-8 rounded-full mr-2">
    
                <!-- username & gist date info -->
                <div class="flex flex-col">
                    <a id="username" :href="'https://github.com/' + gist.owner.login" target="_blank" class="font-fira_bold text-purple-text text-xs pb-1 hover:cursor-pointer">
                        @{{ gist.owner.login }}
                    </a>
                    <p class="font-fira_retina text-xs text-menu-text">Created {{ monthsAgo }} months ago</p>
                </div>
            </div>

            <!-- details and stars -->
            <div class="flex text-menu-text font-fira_retina text-xs justify-self-end lg:mx-2">
                <div class="flex lg:mx-2 hover:cursor-pointer hover:text-white">
                    <img src="/icons/gist/comments.svg" alt="" class="w-4 h-4 mr-2">
                    <span @click="showComment(gist.id)">details</span>
                </div>
                <div class="hidden lg:flex hover:cursor-pointer hover:text-white">
                    <img src="/icons/gist/star.svg" alt="" class="w-4 h-4 mx-2">
                    <span class="">stars</span>
                </div>
            </div>
            
        </div>

        <highlightjs class="snippet-container" :code="content"/>
        <div :id="'comment' + gist.id" class="flex hidden justify-between text-menu-text font-fira_retina mt-4 pt-4 border-top">
            <p id="comment" v-if="comment" class="w-5/6">{{ comment }}</p>
            <p v-else class="w-5/6">No comments.</p>
            <img src="/icons/close.svg" alt="" class="hover:cursor-pointer" @click="showComment(gist.id)">
        </div>
    </div>
</template>

<style>
.snippet-container {
    background-color: #011221;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #1E2D3D;
    font-size: 12px;
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 220px;
}

.snippet-container pre {
    margin: 0;
    overflow: hidden;
    width: 100%;
    max-height: 220px;
}

.snippet-container code {
    white-space: pre-wrap;
    max-height: 220px;
    width: max-content;
    overflow: hidden;

}

.snippet-container::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

pre code.hljs{
    display:block;
    /* overflow-x:auto; */
    padding:1.5em
}

code.hljs{
    padding:3px 5px
}

#comment {
    font-size: 14px;
}

#username:hover {
    color: #5e6ef2;
}

/* #comment {
    
} */

.hljs{color:#85a9ce;background:#011221}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}

</style>

<script>

import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/lib/common';

export default {
    name: 'GistSnippet',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            gist: null,
            monthsAgo: null,
            content: null,
            language: null,
            dataFetched: false,
            comment: null
        }
    },
    mounted(){
        fetch(`https://api.github.com/gists/${this.id}`)
            .then(response => response.json())
            .then(data => this.setValues(data))
            
    },
    methods: {
        async setValues(gist) {
        this.gist = gist
        this.monthsAgo = this.setMonths(gist.created_at)
        this.content = this.setSnippet(gist)
        this.language = Object.values(gist.files)[0].language
        this.dataFetched = true
        this.comment = await this.setComments(gist.comments_url)
        },
        setMonths(date) {
            let now = new Date()
            let gistDate = new Date(date)
            let diff = now.getTime() - gistDate.getTime()
            let days = Math.floor(diff / (1000 * 3600 * 24))
            let months = Math.floor(days / 30)
            return months
        },
        setSnippet(gist) {
            let snippet = Object.values(gist.files)[0].content // Object.values(gist.files)[0].filename.content
            return snippet
        },
        async setComments(comments_url){
            let response = await fetch(comments_url)
            let data = await response.json()
            try{
                let body = data[0].body
                return body
            } catch {
                console.log(`no comments found on ${comments_url}`)
            }
        },
        showComment(id) {
            let comment = document.getElementById('comment' + id)
            comment.classList.toggle('hidden')
        }
    },
    components: {
        highlightjs: hljsVuePlugin.component
    }
}
</script>