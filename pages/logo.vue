<template>
  <main class="logo">
    <s-logo-svg class="logo-svg" />
  </main>
</template>

<script>
import SLogoSvg from '../components/logoSVG'

export default {
  components: {
    SLogoSvg
  }
}
</script>

<style lang="scss" scoped>
.logo {
  &-svg {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 80%;
    margin: 0 auto;
  }
}
</style>
