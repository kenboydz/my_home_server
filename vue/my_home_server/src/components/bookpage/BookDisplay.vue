<template>

  <div>
    <!-- 章节导航 -->
    <div id="book-bar-float" v-show="false">
      <book-display-navbar />
    </div>
    <b-row>
      <!-- chapter 显示 -->
      <b-col>
        <book-display-chapter
          :chapter-content="chapterContent"
          :current-page="currentPage"
          @update:max-page="maxPage = $event"
        />
      </b-col>
      {{ maxPage }}
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
      chapterContent: `fjsklajflakvnalfwajrqw;`,
      currentPage: 1,
      maxPage: 1
    }
  }
}
</script>


<style scoped>
#book-bar-float {
  z-index: 9999;
  position: fixed;
}
</style>
