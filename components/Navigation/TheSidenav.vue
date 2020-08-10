<template>
    <div class="sidenav-container">
        <div class="sidenav-container-backdrop" v-if="show" @click="$emit('close')">
        </div>
        <transition name="slide-side">
            <div class="sidenav-container-nav" v-if="show">
                <ul class="sidenav-container-nav-list" @click="$emit('close')">
                     <li class="sidenav-container-nav-item">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="sidenav-container-nav-item">
                         <nuxt-link to="/software">Software</nuxt-link>
                    </li>
                    <li class="sidenav-container-nav-item">
                         <nuxt-link to="/hardware">hardware</nuxt-link>
                    </li>
                    <li class="sidenav-container-nav-item">
                         <nuxt-link to="/about">About</nuxt-link>
                    </li>
                     <li class="sidenav-container-nav-item">
                         <nuxt-link to="/admin">Admin</nuxt-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>