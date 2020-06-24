<template>
    <div class="featured-posts">
        <h1>TECH</h1>
        <p>The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.</p>
        <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
        <section class="existing-posts">
            <PostList :isAdmin="true" :posts="loadedPosts"></PostList>
        </section>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("fetchPosts");
    },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    },
}
</script>