<template>
  <s-content title="Short Film">
    <template v-slot:media>
      <iframe
        src="https://www.youtube.com/embed/RoQT-jXRo70"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
    <template v-slot:description>
      <p>
        Three students with different backgrounds. One is a boy in Tokyo, a girl
        from Wakayama, and a foreign student from Hong Kong. All three studying
        in the same university but struggling with different challenges from new
        environment, their peers, and growing up. One thing they have in common
        is that each has a dream that gives them strength to stand up and carry
        on.
      </p>
    </template>
  </s-content>
</template>

<script>
import SContent from '../components/content'
export default {
  components: {
    SContent,
  },
}
</script>
