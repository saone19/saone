<template>
  <s-content title="Music Video">
    <template v-slot:media>
      <iframe
        class="music-video"
        src="https://www.youtube.com/embed/WPwhwGxsEQE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>

    <template v-slot:description>
      <p>
        Jessie J's Price Tag rewritten in different languages. The singers in
        this team are challenged to sing in a new language and teach their
        native language to others. A project that combines musical, videography,
        and creativity.
      </p>
    </template>
  </s-content>
</template>

<script>
import SContent from '../components/content'
export default {
  components: {
    SContent
  }
}
</script>
