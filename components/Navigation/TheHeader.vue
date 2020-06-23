<template>
  <div class="sidenav-container">
    <header class="the-header">
      <the-sidenav-toggle @toggle="$emit('sideNavToggle')"></the-sidenav-toggle>
      <div class="logo">
        <nuxt-link to="/">Latest News</nuxt-link>
      </div>
      <div class="sidenav-container-nav">
        <ul class="sidenav-container-nav-list">
          <li class="sidenav-container-nav-list-nav-item">
            <nuxt-link to="/posts">Blog</nuxt-link>
          </li>
          <li class="sidenav-container-nav-list-nav-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="sidenav-container-nav-list-nav-item">
            <nuxt-link to="/admin">Admin</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "./TheSideNavToggle";
export default {
  components: {
    TheSideNav
  }
};
</script>
