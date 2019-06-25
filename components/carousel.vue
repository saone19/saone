<template>
  <section class="carousel">
    <transition name="carousel-fade">
      <img :key="src" class="carousel-img" :src="src" alt />
    </transition>
    <div class="indicator-wrapper">
      <span
        v-for="(img, i) in imgs"
        :key="`img-${i}`"
        :class="[{ current: current === i }, 'indicator']"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      imgs: [
        require('~/assets/carousel-1.jpg'),
        require('~/assets/carousel-2.jpg'),
        require('~/assets/carousel-3.jpg'),
        require('~/assets/carousel-4.jpg')
      ]
    }
  },
  computed: {
    current() {
      return this.count % this.imgs.length
    },
    src() {
      return this.imgs[this.current]
    }
  },
  mounted() {
    window.setInterval(() => {
      this.count += 1
    }, 3000)
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.carousel {
  @include fullpage();
  display: flex;
  &-img {
    filter: brightness(70%);
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.carousel-fade-enter-active {
  transition: all 1s ease;
}
.carousel-fade-leave-active {
  transition: all 1.4s ease;
}
.carousel-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.carousel-fade-leave-to {
  opacity: 0;
}
.indicator {
  &-wrapper {
    position: absolute;
    bottom: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: inline-block;
  height: 2px;
  width: 6rem;
  background-color: $theme-demo-light-orange;
  &.current {
    height: 5px;
    background-color: $theme-light-orange;
  }
}
</style>
