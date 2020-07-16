<template>
  <div>
    <Posts/>
  </div>
</template>

<script>
import Posts from './posts/index';
export default {
  layout: 'default',
  components: {
    Posts
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
