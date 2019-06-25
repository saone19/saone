<template>
  <section class="movie">
    <div class="movie-container">
      <h2 class="movie-title">
        Challenge
        <span class="movie-time">10 min</span>
      </h2>
      <div class="movie-content">
        <div data-aos="fade-up-right" class="movie-video"></div>
        <div data-aos="fade-up-left" class="movie-info">
          <p class="movie-info-txt">
            Director Daron iusdcisdc wdicu wec weciuibi
          </p>
          <p class="movie-info-txt">
            qwdiuhwedjkn wehweuhd weudue wedweuh fjgjvfyxggi erv.
          </p>

          <p class="movie-play">
            <strong>play</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'

export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
    AOS.init()
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.movie {
  color: $theme-dark-orange;
  @include fullpage();
  display: flex;
  &-title {
    font-size: 5rem;
  }
  &-time {
    display: block;
    font-size: 2rem;
  }
  &-container {
    width: 80%;
    margin: 5rem auto;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-video {
    width: 48%;
    height: 15rem;
    background-color: #222;
  }
  &-info {
    width: 48%;
    font-size: 2rem;
    &-txt {
      margin-bottom: 2rem;
    }
  }
  &-play {
    font-size: 3rem;
  }
}
</style>
