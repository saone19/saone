<template>
  <section class="challengers">
    <h1 class="title">
      WE’RE CHALLENGERS FROM
      <transition name="country-fade" mode="out-in">
        <span :key="country" class="country">{{ country }}.</span>
      </transition>
    </h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      countries: [
        'JANPAN🇯🇵',
        'KOREA🇰🇷',
        'HONG KONG🇭🇰',
        'CHINA🇨🇳',
        'MALAYSIA🇲🇾',
        'INDONESIA🇮🇩',
        'YEMEN🇾🇪',
        'VIETNAM🇻🇳'
      ]
    }
  },
  computed: {
    country() {
      return this.countries[this.current % this.countries.length]
    }
  },
  mounted() {
    window.setInterval(() => {
      this.current += 1
    }, 2000)
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.challengers {
  @include fullpage();
  display: flex;
}
.title {
  color: $theme-dark-orange;
  font-size: 2rem;
  margin-top: 45vh;
  width: 80vw;
  margin-left: 10vw;
}

.country-fade-enter-active {
  transition: all 1s ease;
}
.country-fade-leave-active {
  transition: all 1s ease;
}
.country-fade-enter {
  transform: translateY(10px);
  opacity: 0;
}

.country-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.country {
  color: #fff;
  display: inline-block;
  font-size: 3rem;
  vertical-align: middle;
}
</style>
