<template>
  <main class="teacher">
    <div class="teacher-profile">
      <img
        class="teacher-profile-img"
        :src="require('~/assets/maki.png')"
        alt="teacher"
      />
      <div class="teacher-profile-txt">
        <h1 class="teacher-profile-name">EBATA YAMADA MAKIKO</h1>

        <ul class="teacher-profile-detail-list">
          <li class="teacher-profile-detail">
            Teacher of Core English SA 1 Class
          </li>
          <li class="teacher-profile-detail">Master in TESOL</li>
          <li class="teacher-profile-detail">
            Teacher in Digital Hollywood University, Tokyo (Since 2006)
          </li>
          <li class="teacher-profile-detail">
            Teacher of Writing for ESL in Hawaii Pacific University (2005-2006)
          </li>
          <li class="teacher-profile-detail">Surfer from Chiba</li>
        </ul>
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
      object-fit: contain;
      width: 30%;
      margin: 3rem;
    }
    &-txt {
      padding: 1rem;
      color: #ccc;
      width: 60%;
      text-align: left;
      height: 80%;
      border-left: 2px solid #666;
    }
    &-name {
      font-family: serif;
      color: aquamarine;
      margin-bottom: 2rem;
    }
    &-detail {
      margin: 0.5rem 0;
      &-list {
        padding-left: 1rem;
      }
    }
    &-svg {
      min-height: 100%;
    }
  }
}

@media screen and (max-width: 1200px) {
  .teacher {
    &-profile {
      margin: 10vh auto;
      width: 80vw;
      height: 80vh;
      &-img {
        margin: 0;
        padding-left: 1rem;
      }
      &-svg {
        height: 100%;
        width: unset;
        right: -5vw;
      }
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
        margin-top: 5rem;
        margin-bottom: 2rem;
        width: 40%;
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
