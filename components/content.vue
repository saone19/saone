<template>
  <section class="content">
    <div class="content-container">
      <h2 class="content-title">{{ title }}</h2>
      <div class="content-content">
        <div data-aos="fade-up-right" class="content-media">
          <slot name="media" />
        </div>
        <div data-aos="fade-up-left" class="content-description">
          <slot name="description" />
        </div>
      </div>
    </div>
    <s-content-svg />
  </section>
</template>

<script>
import SContentSvg from '../components/contentSvg'

export default {
  components: {
    SContentSvg
  },
  props: {
    title: {
      default: '',
      type: String
    }
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
@import '../assets/_global.scss';
.content {
  color: aliceblue;
  @include fullpage();
  display: flex;
  &-title {
    font-size: 5rem;
    margin-bottom: 2rem;
    font-family: 'Macondo Swash Caps';
    text-shadow: 0 0 1rem #000;
  }
  &-byline {
    display: block;
    font-size: 2rem;
  }
  &-container {
    width: 80%;
    margin: 2rem auto;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &-media {
    width: 48%;
    height: 20rem;
    background-color: #000;
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      box-shadow: 0 0 1rem #222;
    }
  }
  &-description {
    width: 48%;
    font-size: 1.4rem;
    line-height: 1.3;
  }
  &-play {
    font-size: 3rem;
  }
}

@media screen and (max-width: 900px) {
  .content {
    &-title {
      margin-top: 3rem;
      font-size: 3rem;
      margin-bottom: 5rem;
    }
    &-time {
      font-size: 1rem;
    }
    &-content {
      justify-content: center;
    }
    &-media {
      height: 10rem;
    }
    &-media,
    &-description {
      margin-bottom: 3rem;
      width: 100%;
      font-size: 1rem;
      line-height: 1.4rem;
    }
    &-description {
      max-height: 50vh;
      overflow-y: scroll;
    }
    &-play {
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 640px) {
  .content {
    &-title {
      margin-bottom: 2rem;
    }
    &-media {
      margin-bottom: 1rem;
    }
  }
}
</style>
