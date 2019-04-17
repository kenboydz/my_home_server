<template>

  <div>
    <!-- 导航 -->
    <div>
      <book-display-navbar />
    </div>
    <b-row>
      <!-- chapter 显示 -->
      <b-col>
        <book-display-chapter
          :chapter-content="chapter.chapterContent"
          :current-page="chapter.currentPage"
          @update:max-page="chapter.maxPage = $event"
        />
      </b-col>
    </b-row>
  </div>

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
      chapter: {
        chapterContent: `fjsklajflakvnalfwajrqw;`,
        currentPage: 1,
        maxPage: 1
      }
    }
  }
}
</script>


<style scoped>
</style>
