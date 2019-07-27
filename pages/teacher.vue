<template>
  <main class="teacher">
    <div class="teacher-profile">
      <img class="teacher-profile-img" :src="require('~/assets/maki.png')" alt="teacher" />
      <div class="teacher-profile-txt">
        <h1 class="teacher-profile-name">EBATA YAMADA MAKIKO</h1>
        <p
          class="teacher-profile-detail"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </div>
    <s-teacher-svg class="teacher-profile-svg" />
  </main>
</template>


<script>
import STeacherSvg from '../components/teacherSVG'

export default {
  components: {
    STeacherSvg
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_global.scss';
.teacher {
  @include fullpage();
  overflow: hidden;
  position: relative;
  &-profile {
    position: relative;
    margin: 20vh auto;
    width: 60vw;
    height: 60vh;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &-img {
      width: 40%;
      margin: 1rem;
    }
    &-txt {
      padding: 1rem;
      color: #fff;
      width: 60%;
      text-align: left;
      height: 80%;
      border-left: 2px solid #666;
    }
    &-name {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (max-width: 640px) {
  .teacher {
    &-profile {
      margin: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0;
      flex-wrap: wrap;
      &-img {
        width: 50%;
      }
      &-txt {
        border-left: none;
        border-top: 2px solid #666;
        width: 90%;
      }
      &-svg {
        height: 100%;
        width: unset;
        right: -5vw;
      }
    }
  }
}
</style>
