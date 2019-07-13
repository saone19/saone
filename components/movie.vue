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
          <p class="movie-info-txt">Director Daron iusdcisdc wdicu wec weciuibi</p>
          <p class="movie-info-txt">qwdiuhwedjkn wehweuhd weudue wedweuh fjgjvfyxggi erv.</p>

          <p class="movie-play">
            <strong>play</strong>
          </p>
        </div>
      </div>
    </div>

    <s-section-title text="Movie" />
    <s-footer />
  </section>
</template>

<script>
//import 'aos/dist/aos.css'
import SFooter from '../components/footer'
//import AOS from 'aos'
import sSectionTitle from './sectionTitle'

export default {
  components: {
    sSectionTitle,
    SFooter
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    //    AOS.init()
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
    flex-wrap: wrap;
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

@media screen and (max-width: 900px) {
  .movie {
    &-title {
      font-size: 3rem;
    }
    &-time {
      font-size: 1rem;
    }
    &-content {
      margin-top: 3rem;
      justify-content: center;
    }
    &-video,
    &-info {
      margin-bottom: 1rem;
      width: 100%;
      font-size: 1.4rem;
      &-txt {
        margin-bottom: 1rem;
      }
    }
    &-play {
      font-size: 2rem;
    }
  }
}
</style>
