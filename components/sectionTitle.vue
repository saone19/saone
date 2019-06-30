<template>
  <h2 class="section-title" :style="{ '--content': `'${text}'` }">
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/color.scss';
.section-title {
  opacity: 0.6;
  font-size: 5rem;
  position: absolute;
  writing-mode: vertical-rl;
  transform: rotateZ(180deg);
  color: $theme-middle-orange;
  right: 1rem;
  bottom: 3rem;
  &::after {
    position: absolute;
    color: transparent;
    top: 10px;
    left: 5px;
    z-index: -1;
    content: var(--content);
    -webkit-text-stroke: 2px #fff;
  }
}
@media screen and (max-width: 900px) {
  .section-title {
    writing-mode: unset;
    transform: unset;
    font-size: 2rem;
    bottom: 1rem;
    &::after {
      display: none;
    }
  }
}

@media screen and (max-width: 640px) {
  .section-title {
    font-size: 1rem;
  }
}
</style>
