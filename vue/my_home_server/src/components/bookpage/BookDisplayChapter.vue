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
          <book-display-chapter-page :chapter-page-content="chapterPageContent" />
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
import BookDisplayChapterPage from './BookDisplayChapterPage.vue'
import PaginationBar from '../common/PaginationBar.vue'

export default {
  name: 'BookDisplayChapter',
  components: {
    BookDisplayChapterPage,
    PaginationBar
  },
  props: {
    chapterContent: String
  },
  data: function () {
    return {
      page_index: 0
    }
  },
  computed: {
    chapterPages: function() {
      return this.chapterContent.split("");
    },
    chapterPageContent: function() {
      return this.chapterPages[this.page_index];
    }
  }

}
</script>


<style scoped>
</style>
