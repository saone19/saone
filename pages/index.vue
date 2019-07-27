<template>
  <div class="index">
    <transition name="view" mode="out-in">
      <s-top v-if="currentView === 'top'" />
      <s-challenger v-else-if="currentView === 'challenger'" />
      <s-maki v-else-if="currentView === 'maki'" />
    </transition>
  </div>
</template>

<script>
import SChallenger from '../components/challenger'
//import SCarousel from '../components/carousel'
import SMovie from '../components/movie'
import SMaki from '../components/maki'
import STop from '../components/top'

export default {
  components: {
    STop,
    //    SCarousel,
    SChallenger,
    SMaki,
    SMovie
  },
  data() {
    return {
      current: 0,
      scrolling: false,
      view: ['top', 'challenger', 'maki']
    }
  },
  computed: {
    currentView() {
      return this.view[this.current]
    }
  },
  mounted() {
    window.addEventListener('scroll', e => e.preventDefault())
    document.addEventListener('wheel', e => e.preventDefault(), {
      passive: false
    })
    window.ontouchmove = e => e.preventDefault()

    window.onmousewheel = ({ deltaY }) => {
      const threshold = 0

      if (this.scrolling) {
        return
      }

      if (this.current !== 0 && deltaY < -threshold) {
        this.current -= 1
      } else if (this.current !== this.view.length - 1 && deltaY > threshold) {
        this.current += 1
      }

      this.scrolling = true
      setTimeout(() => {
        this.scrolling = false
      }, 300)
    }
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

.view-enter-active {
  animation: view-in 0.5s;
}
.view-leave-active {
  animation: view-out 0.5s;
}

.slide-fade-enter-to {
  opacity: 1;
}
.slide-fade-leave-to {
  opacity: 0;
}

@keyframes view-in {
  0% {
    transform: scale(0.5) rotate(30deg);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes view-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5) rotate(-30deg);
    opacity: 0;
  }
}
</style>
