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
  name: 'BookMain',
  components: {
    BookDisplayChapterPage,
    PaginationBar
  },
  props: {
    chapterContent: String
  },
  data: function () {
    return {
      page_index: 1
    }
  },
  computed: {
    chapterPageContent: function() {
      return this.chapterContent;
    }
  }

}
</script>


<style scoped>
</style>
