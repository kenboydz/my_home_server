<template>

  <b-container>
    <!-- 顶部分页 -->
    <b-row align-v="start">
      <b-col>
        <pagination-bar />
      </b-col>
    </b-row>
    <!-- chapter显示 -->
    <b-row>
      <b-col>
        {{ chapterContent }}
      </b-col>
    </b-row>
    <!-- 底部分页 -->
    <b-row align-v="end">
      <b-col>
        <pagination-bar />
      </b-col>
    </b-row>
  </b-container>

</template>


<script>
import PaginationBar from '../common/PaginationBar.vue'

export default {
  name: 'BookMain',
  components: {
    PaginationBar
  },
  props: {
    chapterContent: String,
    charactersPerPage: {
      type: Number,
      default: 10
    },
    currentPageIndex: Number
  },

}
</script>


<style scoped>
/* #the-book-main-container {
  background-color: midnightblue;
} */
</style>
