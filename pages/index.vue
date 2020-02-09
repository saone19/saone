<template>
  <main>
    <div class="index-title-wrapper">
      <h1 id="index-title" class="index-title">
        The
        <br />SAONE <br class="index-title-small-wrap" /><small
          class="index-title-small"
          >& SATWO</small
        >
        <br />Project
      </h1>
    </div>
    <s-index-svg />
  </main>
</template>

<script>
import SIndexSvg from '../components/indexSVG'

export default {
  components: {
    SIndexSvg
  }
}
</script>

<style lang="scss">
@import '../assets/_global.scss';
.index {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  &-title {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    &-wrapper {
      z-index: 40;
      width: 100vw;
      top: 2rem;
      position: absolute;
      display: flex;
      justify-content: flex-end;
    }
    &-small {
      font-size: 2rem;
      color: deeppink;
      &-wrap {
        display: none;
      }
    }
    margin-right: 5rem;
    text-align: left;
    color: #fff;
    text-shadow: 0 0 1rem #000;
    font-weight: normal;
    font-size: 6rem;
    font-family: 'Macondo Swash Caps';
  }
}

@media screen and (max-width: 1100px) {
  .index {
    &-title {
      font-size: 4rem;
      &-small {
        font-size: 1.4rem;
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .index {
    &-title {
      color: #fff;
      text-shadow: 0 0 1rem #000;
      margin-right: 0;
      &-wrapper {
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .index {
    &-title {
      text-shadow: 0 0 10px #000;
      margin-top: 3rem;
      margin-right: -2rem;
      &-small {
        font-size: 2rem;
        &-wrap {
          display: block;
        }
      }
    }
  }
}
</style>
