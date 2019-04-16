<template>

  <b-row>
    <!-- 章节导航 -->
    <b-col>
      <book-display-navbar />
    </b-col>
    <!-- chapter 显示 -->
    <b-col>
      <!-- 顶部分页 -->
      <b-row align-v="start">
        <b-col>
          <pagination-bar />
        </b-col>
      </b-row>
      <!-- chapter显示 -->
      <b-row>
        <b-col>
          <book-display-chapter :chapter-content="chapterContent" />
        </b-col>
      </b-row>
      <!-- 底部分页 -->
      <b-row align-v="end">
        <b-col>
          <pagination-bar />
        </b-col>
      </b-row>
    </b-col>
  </b-row>

</template>


<script>
import BookDisplayChapter from './BookDisplayChapter.vue'
import BookDisplayNavbar from './BookDisplayNavbar.vue'
import PaginationBar from '../common/PaginationBar.vue'

export default {
  name: 'BookDisplay',
  components: {
    BookDisplayChapter,
    BookDisplayNavbar,
    PaginationBar
  },
  data: function () {
    return {
      chapterContent: `fjsklajflakvnalfwajrqw;`
    }
  }
}
</script>


<style scoped>
</style>
