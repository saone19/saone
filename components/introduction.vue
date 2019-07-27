<template>
  <section class="challengers">
    <h2 class="title">
      WE’RE CHALLENGERS FROM
      <transition name="country-fade" mode="out-in">
        <span :key="country" class="country">{{ country }}.</span>
      </transition>
    </h2>
    <s-section-title text="Introduction" />
    <div class="hexagon-wrapper">
      <s-hexagon class="hexagon-1" height="200" />
      <s-hexagon class="hexagon-2" height="350" />
      <s-hexagon class="hexagon-3" height="100" />
    </div>
  </section>
</template>

<script>
import sHexagon from './hexagon'
import sSectionTitle from './sectionTitle'
export default {
  components: {
    sHexagon,
    sSectionTitle
  },
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
@import '../assets/_global.scss';
.challengers {
  @include fullpage();
  display: flex;
}
.title {
  color: beige;
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
.hexagon {
  &-wrapper {
    width: 100vw;
    position: absolute;
    height: 100vh;
    z-index: -1;
  }
  &-1 {
    left: 30vw;
    top: 20vh;
  }
  &-2 {
    left: 40vw;
    top: 40vh;
  }
  &-3 {
    left: 70vw;
    top: 30vh;
    transform: rotate(30deg);
  }
}
@media screen and (max-width: 900px) {
  .title {
    margin-top: 35vh;
  }
  .country {
    display: block;
  }
}
</style>
