<template>
  <div>
    <s-navigator />
    <nuxt />
    <s-footer />
  </div>
</template>

<script>
import { constants } from 'crypto'
import SNavigator from '../components/navigator'
import SFooter from '../components/footer'
export default {
  components: {
    SFooter,
    SNavigator
  },
  data() {
    return {
      touchY: 0,
      navigating: false,
      view: [
        '/',
        '/logo',
        '/introduction',
        '/teacher',
        '/music-video',
        '/short-film',
        '/about-us'
      ]
    }
  },
  methods: {
    direction(direction) {
      const currentIndex = this.view.findIndex(
        path => path === this.$route.path
      )

      console.log(currentIndex)
      const next = this.view[
        direction === 'down' ? currentIndex + 1 : currentIndex - 1
      ]
      // console.log({ next, route: this.$route.path })
      if (!next) return
      this.$router.push(next)
    }
  },
  mounted() {
    const setNavigating = () => {
      this.navigating = true
      setTimeout(() => {
        this.navigating = false
      }, 1000)
    }

    const handleNavigation = (deltaY, threshold) => {
      if (this.navigating) {
        return
      }

      if (this.$route.path !== '/' && deltaY < -threshold) {
        this.direction('up')
        setNavigating()
      } else if (
        this.$route.path !== this.view.length - 1 &&
        deltaY > threshold
      ) {
        this.direction('down')
        setNavigating()
      }
    }
    window.addEventListener('wheel', ({ deltaY }) => {
      handleNavigation(deltaY, 0)
    })

    window.addEventListener(
      'touchstart',
      e => (this.touchY = e.touches[0].pageY),
      false
    )

    window.addEventListener(
      'touchmove',
      e => {
        const deltaY = this.touchY - e.touches[0].pageY
        handleNavigation(deltaY, 100)
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
