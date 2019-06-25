<template>
  <div class="index">
    <s-carousel id="carousel" />
    <s-introduction id="introduction" />
    <s-movie id="movie" />
  </div>
</template>

<script>
import SIntroduction from '../components/introduction'
import SCarousel from '../components/carousel'
import SMovie from '../components/movie'

export default {
  components: {
    SCarousel,
    SIntroduction,
    SMovie
  },
  data() {
    return {
      current: 0,
      scrolling: false,
      anchors: ['carousel', 'introduction', 'movie']
    }
  },
  mounted() {
    window.addEventListener('scroll', e => e.preventDefault())
    document.addEventListener('wheel', e => e.preventDefault(), {
      passive: false
    })
    window.onmousewheel = ({ deltaY }) => {
      const threshold = 0
      if (this.scrolling) {
        return
      }

      if (this.current !== 0 && deltaY < -threshold) {
        this.current -= 1
        console.log('-')
      } else if (
        this.current !== this.anchors.length - 1 &&
        deltaY > threshold
      ) {
        this.current += 1
        console.log('+')
      }

      document
        .getElementById(this.anchors[this.current])
        .scrollIntoView({ behavior: 'smooth' })

      this.scrolling = true
      setTimeout(() => {
        this.scrolling = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.index {
  height: 300vh;
  width: 100vw;
}
</style>
