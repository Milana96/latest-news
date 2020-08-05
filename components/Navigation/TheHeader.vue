<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sideNavToggle')"></TheSideNavToggle>
      <div class="logo">
        <nuxt-link class="logo-ln logo-small" to="/">LN</nuxt-link>
      </div>
      <div class="header-container-nav">
        <ul class="header-container-nav-list">
          <li class="header-container-nav-list-item">
            <nuxt-link to="/software">Software</nuxt-link>
          </li>
          <li class="header-container-nav-list-item">
            <nuxt-link to="/hardware">Hardware</nuxt-link>
          </li>
          <li class="header-container-nav-list-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="header-container-nav-list-item">
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
    TheSideNavToggle
  }
};
</script>
