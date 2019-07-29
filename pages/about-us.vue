<template>
  <main class="group">
    <div class="group-container">
      <h1 class="group-title">About Us</h1>

      <transition-group
        name="group-figure"
        class="group-figure-wrapper"
        tag="div"
      >
        <div
          v-for="group in show"
          :key="group"
          class="group-figure group-figure-item"
          @click="select(group)"
        >
          <img
            class="group-figure-img"
            :src="require(`../assets/group-${toCamelCase(group)}.png`)"
            :alt="`${group} Group`"
          />
          <p class="group-figure-name">{{ group }}</p>
        </div>
      </transition-group>

      <div class="group-photo-wrapper">
        <transition name="group-photo">
          <img
            v-if="selected"
            class="group-photo"
            :src="require(`../assets/group-${toCamelCase(selected)}-photo.jpg`)"
            :alt="`${selected} Group Photo`"
            @click="select('')"
          />
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      groups: ['Short Film', 'Website', 'Music Video']
    }
  },
  computed: {
    show() {
      if (!this.selected) {
        return this.groups
      }
      return this.groups.filter(name => this.selected === name)
    }
  },
  mounted() {},
  methods: {
    select(name) {
      if (this.selected) {
        this.selected = ''
        return
      }
      this.selected = name
    },
    toCamelCase(str) {
      return str.replace(' ', '-').toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  &-container {
    position: relative;
    width: 80%;
    margin: 2rem auto;
    overflow: hidden;
  }
  &-title {
    color: aliceblue;
    font-size: 5rem;
    font-family: 'Macondo Swash Caps';
    text-shadow: 0 0 1rem #000;
    margin-bottom: 5rem;
  }
  &-figure {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:hover {
      .group-figure-img {
        opacity: 0.6;
      }
      .group-figure-name {
        transform: translateY(-5px);
      }
    }
    &-name {
      transition: all 0.3s ease-in-out;
      font-size: 2rem;
      width: 80%;
      left: 10%;
      position: absolute;
      bottom: 3rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 5px;
      border-radius: 5px;
      color: #fff;
    }
    &-img {
      height: 60vh;
      object-fit: contain;
      transition: all 0.3s ease-in-out;
      width: 25vw;
      filter: drop-shadow(0 0 1rem #222);
    }
    &-wrapper {
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    &-item {
      transition: all 0.3s;
      display: inline-flex;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-leave-active {
      position: absolute;
    }
  }
  &-photo {
    width: 100%;
    border: 5px solid #fff;
    box-shadow: 0 0 1rem #000;
    &-wrapper {
      position: absolute;
      width: 50vw;
      right: 0;
      bottom: 5rem;
    }
    &-enter-active {
      transition-delay: 0.5s;
      transition: opacity 0.5s;
    }

    &-leave-active {
      transition: opacity 0.5s;
    }
    &-enter {
      opacity: 0;
    }

    &-leave-to {
      display: none;
    }
  }
}

@media screen and (max-width: 960px) {
  .group {
    &-title {
      margin-top: 3rem;
      font-size: 3rem;
      margin-bottom: 5rem;
    }
  }
}

@media screen and (max-width: 960px) {
  .group {
    &-figure {
      &-name {
        font-size: 1.4rem;
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .group {
    &-title {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    &-figure {
      width: 50%;
      justify-content: space-around;
      &-name {
        width: 90%;
        left: 5%;
      }
      &-img {
        height: 30vh;
        width: 40vw;
      }
    }
    &-photo {
      &-wrapper {
        position: relative;

        width: 100%;
        bottom: 0;
      }
    }
  }
}
</style>
