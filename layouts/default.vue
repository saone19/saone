<template>
  <div>
    <s-logo />
    <s-navigator />
    <nuxt />
  </div>
</template>

<script>
import SLogo from '../components/logo'
import SNavigator from '../components/navigator'
export default {
  components: {
    SLogo,
    SNavigator
  },
  data() {
    return {
      touchY: 0,
      current: 0,
      navigating: false,
      view: ['/', 'challenger', 'teacher', 'music-video', 'short-film']
    }
  },
  watch: {
    current() {
      const next = this.view[this.current]
      this.$router.push(next)
    }
  },
  mounted() {
    const handleNavigation = deltaY => {
      const threshold = 0

      if (this.navigating) {
        return
      }

      this.navigating = true
      setTimeout(() => {
        this.navigating = false
      }, 1000)

      if (this.current !== 0 && deltaY < -threshold) {
        this.current -= 1
      } else if (this.current !== this.view.length - 1 && deltaY > threshold) {
        this.current += 1
      }
    }
    window.addEventListener('mousewheel', ({ deltaY }) =>
      handleNavigation(deltaY)
    )

    window.addEventListener(
      'touchstart',
      e => (this.touchY = e.touches[0].pageY),
      false
    )

    window.addEventListener(
      'touchmove',
      e => {
        deltaY = this.touchY - e.touches[0].pageY
        handleNavigation(deltaY)
      },
      false
    )
  }
}
</script>

<style lang="scss">
@import '../assets/_global.scss';
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

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  background-size: 200% 200%;
  background-image: linear-gradient(to right, #151846, #273b63, #151846 50%);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
main {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
