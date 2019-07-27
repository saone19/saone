<template>
  <main>
    <s-index-svg />
  </main>
</template>

<script>
import SIndexSvg from '../components/indexSVG'

export default {
  components: {
    SIndexSvg
  }
}
</script>

<style lang="scss">
@import '../assets/_global.scss';
.index {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
