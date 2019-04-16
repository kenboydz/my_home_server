<template>

  <b-row>
    <!-- 章节导航 -->
    <b-col>
      <book-display-navbar />
    </b-col>
    <!-- chapter 显示 -->
    <b-col>
      <book-display-chapter :chapter-content="chapterContent" />
    </b-col>
  </b-row>

</template>


<script>
import BookDisplayNavbar from './BookDisplayNavbar.vue'
import BookDisplayChapter from './BookDisplayChapter.vue'

export default {
  name: 'BookDisplay',
  components: {
    BookDisplayNavbar,
    BookDisplayChapter
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
