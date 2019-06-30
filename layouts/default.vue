<template>
  <div>
    <s-logo />
    <s-navigator />
    <nuxt />
    <s-footer />
  </div>
</template>

<script>
import SLogo from '../components/logo'
import SFooter from '../components/footer'
import SNavigator from '../components/navigator'
export default {
  components: {
    SLogo,
    SFooter,
    SNavigator
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  background-size: 200% 200%;
  background-image: linear-gradient(
    20deg,
    $theme-dark-orange,
    $theme-demo-light-orange,
    $theme-demo-orange
  );
}
</style>
