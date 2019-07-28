<template>
  <div class="error">
    <div v-if="error.statusCode === 404">
      <h1 class="error-title">Page not found</h1>
    </div>
    <h1 v-else>An error occurred</h1>
    <p class="error-msg">
      <nuxt-link to="/">Home page</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss">
.error {
  height: 100vh;
  width: 100vw;
  color: #fff;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  &-title {
    font-size: 5rem;
    font-family: 'Macondo Swash Caps';
    margin-bottom: 2rem;
  }
  &-msg {
    width: 100%;
    a {
      transition: all 0.3s ease-in-out;
      font-size: 3rem;
      font-family: 'Macondo Swash Caps';
      color: #ccc;
      text-decoration: none;
      width: 100%;
      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
