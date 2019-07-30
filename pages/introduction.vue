<template>
  <main class="introduction">
    <h2 class="introduction-title">
      WE’RE CHALLENGERS FROM
      <transition name="country-fade" mode="out-in">
        <span :key="country" class="country">{{ country }}.</span>
      </transition>
    </h2>
    <div class="introduction-wrapper">
      <s-introduction-svg class="introduction-svg" />
    </div>
  </main>
</template>

<script>
import SIntroductionSvg from '../components/introductionSvg'

export default {
  components: {
    SIntroductionSvg
  },
  data() {
    return {
      count: 0,
      countries: [
        'JAPAN🇯🇵',
        'KOREA🇰🇷',
        'HONGKONG🇭🇰',
        'SHANGHAI🇨🇳',
        'MALAYSIA🇲🇾',
        'INDONESIA🇮🇩',
        'Vietnam🇻🇳'
      ]
    }
  },
  computed: {
    country() {
      return this.countries[this.count % this.countries.length]
    }
  },
  mounted() {
    window.setInterval(() => {
      this.count += 1
    }, 2000)
  }
}
</script>

<style lang="scss">
@import '../assets/_global.scss';
.introduction {
  @include fullpage();
  display: flex;
  &-title {
    color: beige;
    font-size: 2rem;
    margin-top: 40vh;
    width: 80vw;
    height: fit-content;
    margin-left: 10vw;
  }
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
.introduction {
  &-svg {
    position: absolute;
    bottom: 0;
  }
  &-wrapper {
    width: 100vw;
    position: absolute;
    height: 100vh;
    z-index: -1;
  }
}
@media screen and (max-width: 900px) {
  .introduction {
    &-title {
      margin-top: 35vh;
    }
  }
  .country {
    display: block;
  }
}

@media screen and (max-width: 640px) {
  .introduction {
    &-title {
      margin-top: 25vh;
    }
    &-svg {
      height: 50vh;
      width: unset;
      left: -70vw;
    }
  }
}
</style>
