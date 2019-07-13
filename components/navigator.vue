<template>
  <div>
    <div :class="[{ 'humberger--open': open }, 'humberger']" @click="toggleOpen">
      <span class="humberger-line"></span>
      <span class="humberger-line"></span>
    </div>
    <transition name="wrapper-fade">
      <div v-if="open" :key="open" class="nav-wrapper">
        <nav class="nav">
          <transition-group
            name="nav-fade"
            class="nav-list"
            tag="ul"
            :style="{ '--total': links.length }"
            appear
          >
            <li
              v-for="(link, i) in links"
              :key="link.name"
              class="nav-list-item"
              :style="{ '--i': i }"
              @mouseover="navHover(i)"
              @mouseleave="navLeave"
            >
              <a :href="link.url" @click="close">{{ link.name }}</a>
            </li>
          </transition-group>
          <div class="nav-list-img-wrapper">
            <transition name="wrapper-fade" mode="out-in">
              <div :key="hover" class="nav-list-img" :style="{ background: preview[hover] }"></div>
            </transition>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      hover: -1,
      preview: ['hotpink', 'white', 'cyan', 'yellowgreen', 'skyblue', 'ivory'],
      links: [
        { url: '/#top', name: 'HOMEPAGE' },
        { url: '/#introduction', name: 'INTRODUCTION' },
        { url: '/#movie', name: 'MOVIE' },
        { url: '/#', name: 'MV' },
        { url: '/#', name: 'PROFILE' },
        { url: '/#', name: 'BEHIND THE SCENE' }
      ]
    }
  },
  created() {},
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    navHover(i) {
      this.hover = i
    },
    navLeave() {
      this.hover = -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/color.scss';
.humberger {
  cursor: pointer;
  position: fixed;
  left: 2rem;
  top: calc(50vh - 1rem);
  width: 3rem;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 50;
  &-line {
    transition: 0.3s all ease-in-out;
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    box-shadow: 0 0 5px #000;
  }

  $translate-size: 4px;
  &--open {
    .humberger-line {
      &:first-child {
        transform: translateY($translate-size) rotate(1turn + 45deg);
      }
      &:last-child {
        transform: translateY(-$translate-size) rotate(-1turn - 45deg);
      }
    }
    &:hover {
      .humberger-line {
        background-color: #fff;
        &:first-child {
          transform: translateY($translate-size) rotate(1turn + 10deg);
        }
        &:last-child {
          transform: translateY(-$translate-size) rotate(-1turn - 10deg);
        }
      }
    }
  }
  &:not(.humberger--open):hover {
    .humberger-line {
      background-color: #fff;
      &:first-child {
        transform: translateY($translate-size) rotate(10deg);
      }
      &:last-child {
        transform: translateY(-$translate-size) rotate(-10deg);
      }
    }
  }
}
.nav {
  position: fixed;
  top: 10vh;
  height: 80vh;
  left: 20vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  &-wrapper {
    transition: 0.3s all ease-in-out;
    position: fixed;
    z-index: 45;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
  &-list {
    list-style: none;
    user-select: none;

    &-item {
      &:hover {
        cursor: pointer;
        a {
          display: block;
          color: $theme-dark-orange;
        }
      }
      a {
        transition: 0.3s all ease-in-out;
        color: $theme-demo-orange;
        font-size: 2rem;
        text-decoration: none;
      }
    }
    &-img {
      width: 30vw;
      height: 30vh;
      &-wrapper {
        margin-left: 10vh;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .humberger {
    top: 2rem;
  }
  .nav {
    left: 0;
  }
}

.nav-fade-enter-active {
  transition: all 0.5s ease;
  transition-delay: calc(0.1s * var(--i));
}
.nav-fade-leave-active {
  transition: all 0.5s ease;
  transition-delay: calc(0.1s * (var(--total) - var(--i)));
}
.nav-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.nav-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.wrapper-fade-enter-active {
  transition: all 0.3s ease;
}
.wrapper-fade-leave-active {
  transition: all 0.3s ease;
}
.wrapper-fade-enter {
  opacity: 0;
}

.wrapper-fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 640px) {
  .nav-list-img {
    display: none;
  }
}
</style>
