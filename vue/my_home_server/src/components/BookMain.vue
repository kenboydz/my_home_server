<template>

  <b-container class="text-light bg-dark">
    <b-row align-v="start">
      <b-col>
        <pagination-bar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p v-for="i in 50" :key="i">
          {{i}}
        </p>
      </b-col>
    </b-row>
    <b-row align-v="end">
      <b-col>
        <pagination-bar />
      </b-col>
    </b-row>
  </b-container>

</template>


<script>
import PaginationBar from '../components/PaginationBar.vue'

export default {
  name: 'BookMain',
  components: {
    PaginationBar
  }
}
</script>


<style scoped>
/* #the-book-main-container {
  background-color: midnightblue;
} */
</style>
