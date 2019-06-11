<template>
  <div class="container">
    <logo />
    <h1 class="title">
      <span class="title__text">The SAONE Project</span>
    </h1>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '../assets/color.scss';

.container {
  height: 100vh;
  overflow: hidden;
}
.title {
  position: relative;
  margin-top: 5rem;
  color: #fff;
  text-align: center;
  height: 5rem;
  line-height: 5rem;
  text-shadow: 0 0 5px #000;
  border-radius: 1rem;
  transform: skewY(8deg);
  background-image: linear-gradient(
    to right,
    $theme-light-orange,
    $theme-dark-orange
  );
  &::before {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 25vw;
    content: '';
    width: 120vw;
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
    transform: rotate(-70deg);
    box-shadow: 0 0 5px #000;
    background-image: linear-gradient(
      to right,
      $theme-light-orange,
      $theme-dark-orange
    );
  }

  &::after {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 18vw;
    content: '';
    width: 120vw;
    display: block;
    height: 2rem;
    border-radius: 0.5rem;
    transform: rotate(-70deg);
    box-shadow: 0 0 5px #000;
    background-image: linear-gradient(
      to right,
      $theme-light-orange,
      $theme-dark-orange
    );
  }
  &__text {
    display: inline-block;
    animation: move 3s ease-in-out infinite;
  }
}
@keyframes move {
  0% {
    opacity: 0;
    transform: translateX(2rem);
  }
  50% {
    opacity: 1;
    transform: translateX(0rem);
  }
  100% {
    opacity: 0;
    transform: translateX(-2rem);
  }
}
</style>
