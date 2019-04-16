<template>

  <div>
    {{ chapterContent }}
  </div>

</template>


<script>
export default {
  name: 'BookMain',
  props: {
    chapterContent: String
  },

}
</script>


<style scoped>
/* #the-book-main-container {
  background-color: midnightblue;
} */
</style>
