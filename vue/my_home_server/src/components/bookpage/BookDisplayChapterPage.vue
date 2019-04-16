<template>

  <div class="text-light bg-dark">
    {{ chapterPageContent }}
  </div>

</template>


<script>
export default {
  name: 'BookMain',
  props: {
    chapterPageContent: String
  },

}
</script>


<style scoped>
</style>
