<template>
  <section class="content">
    <div class="content-container">
      <h2 class="content-title">{{title}}</h2>
      <div class="content-content">
        <div data-aos="fade-up-right" class="content-video"></div>
        <div data-aos="fade-up-left" class="content-description">
          <slot />
        </div>
      </div>
    </div>
    <s-content-svg />
    <s-footer />
  </section>
</template>

<script>
import SFooter from '../components/footer'
import sSectionTitle from './sectionTitle'
import SContentSvg from '../components/contentSvg'

export default {
  components: {
    SContentSvg,
    sSectionTitle,
    SFooter
  },
  props: ['title'],
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
@import '../assets/_global.scss';
.content {
  color: lightblue;
  @include fullpage();
  display: flex;
  &-title {
    font-size: 5rem;
  }
  &-byline {
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
    background-color: #ccc;
  }
  &-description {
    width: 48%;
    font-size: 1.6rem;
  }
  &-play {
    font-size: 3rem;
  }
}

@media screen and (max-width: 900px) {
  .content {
    &-title {
      font-size: 3rem;
    }
    &-time {
      font-size: 1rem;
    }
    &-content {
      justify-content: center;
    }
    &-video {
      height: 10rem;
    }
    &-video,
    &-description {
      margin-bottom: 1rem;
      width: 100%;
      font-size: 1.2rem;
    }
    &-description {
      max-width: 50vh;
      overflow-y: scroll;
    }
    &-play {
      font-size: 2rem;
    }
  }
}
</style>
