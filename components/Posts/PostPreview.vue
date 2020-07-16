<template>
    <nuxt-link :to="postLink">
        <article class="post-preview">
             <div
                class="post-preview-image"
                :style="{backgroundImage: 'url(' + image + ')'}">
            </div>
            <div class="post-preview-content">
                <h1>{{title}}</h1>
                <p>{{previewText}}</p>
                <small>{{author}}</small>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        postLink() {
            return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
        }
    },
}
</script>