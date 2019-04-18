<template>

  <div>
    <!-- 导航 -->
    <div>
      <book-display-navbar
        :max-page="maxPage"
        @update:current-page="currentPage = $event"
      />
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
</style>
