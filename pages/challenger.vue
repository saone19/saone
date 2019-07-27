<template>
  <main class="challenger">
    <h2 class="challenger-title">
      WE’RE CHALLENGERS FROM
      <transition name="country-fade" mode="out-in">
        <span :key="country" class="country">{{ country }}.</span>
      </transition>
    </h2>
    <div class="challenger-wrapper">
      <s-challenger-svg class="challenger-svg" />
    </div>
  </main>
</template>

<script>
import { TweenMax, TimelineMax, Elastic, Back } from 'gsap'
import SChallengerSvg from '../components/challengerSvg'

export default {
  components: {
    SChallengerSvg
  },
  data() {
    return {
      count: 0,
      countries: [
        'JANPAN🇯🇵',
        'KOREA🇰🇷',
        'HONGKONG🇭🇰',
        'SHANGHAI🇨🇳',
        'MALAYSIA🇲🇾',
        'INDONESIA🇮🇩'
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
.challenger {
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
.challenger {
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
  .challenger {
    &-title {
      margin-top: 35vh;
    }
  }
  .country {
    display: block;
  }
}

@media screen and (max-width: 640px) {
  .challenger {
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
