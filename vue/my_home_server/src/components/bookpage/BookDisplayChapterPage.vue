<template>

  <div class="text-light bg-dark">
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
</style>
