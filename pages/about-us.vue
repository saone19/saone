<template>
  <main class="group">
    <div class="group-container">
      <h1 class="group-title">About Us</h1>

      <transition-group name="group-figure" class="group-figure-wrapper" tag="div">
        <div
          class="group-figure group-figure-item"
          v-for="group in show"
          :key="group"
          @click="select(group)"
        >
          <img
            class="group-figure-img"
            :src="require(`../assets/group-${toCamelCase(group)}.png`)"
            :alt="`${group} Group`"
          />
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
  },
  computed: {
    show() {
      if (!this.selected) {
        return this.groups
      }
      return this.groups.filter(name => this.selected === name)
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.group {
  &-container {
    position: relative;
    width: 80%;
    margin: 2rem auto;
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
    cursor: pointer;
    &-img {
      height: 60vh;
      object-fit: contain;
      transition: all 0.3s ease-in-out;
      width: 25vw;
      opacity: 0.6;
      filter: drop-shadow(0 0 1rem #222);
      &:hover {
        opacity: 1;
      }
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

@media screen and (max-width: 900px) {
  .group {
    &-title {
      margin-top: 3rem;
      font-size: 3rem;
      margin-bottom: 5rem;
    }
  }
}

@media screen and (max-width: 640px) {
  .group {
    &-title {
      margin-bottom: 2rem;
    }
    &-figure {
      width: 50%;
      justify-content: space-around;
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
