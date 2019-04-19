<template>

  <div id="book-display-chapter-page" class="text-light bg-dark">
    {{ chapterPageContent }}
  </div>

</template>


<script>
export default {
  name: 'BookDisplayChapterPage',
  props: {
    chapterPageContent: String
  }
}
</script>


<style scoped>
#book-display-chapter-page {
  z-index: -100;
  /* position: fixed; */
  height:100vh;
}
</style>
