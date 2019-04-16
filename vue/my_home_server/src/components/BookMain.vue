<template>

  <b-row>
    <b-col>
      <p v-for="i in 50" :key="i">
        {{i}}
      </p>
    </b-col>
  </b-row>

</template>


<script>

export default {
  name: 'BookMain'
}
</script>


<style scoped>
/* #the-book-main-container {
  background-color: midnightblue;
} */
</style>
