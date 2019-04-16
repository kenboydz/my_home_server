<template>

  <b-row>
    <b-col>
      {{ chapterContent }}
    </b-col>
  </b-row>

</template>


<script>

export default {
  name: 'BookMain',
  props: {
    chapterContent: String
  }
}
</script>


<style scoped>
/* #the-book-main-container {
  background-color: midnightblue;
} */
</style>
