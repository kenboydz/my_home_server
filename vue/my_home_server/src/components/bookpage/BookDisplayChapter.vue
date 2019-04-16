<template>

  <b-container>
      <!-- 顶部分页 -->
      <b-row align-v="start">
        <b-col>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalPages"
            per-page="1"
            align="center"
            size="sm"
          ></b-pagination>
        </b-col>
      </b-row>
      <!-- chapter显示 -->
      <b-row>
        <b-col>
          <book-display-chapter-page :chapter-page-content="chapterPageContent" />
        </b-col>
      </b-row>
  </b-container>

</template>


<script>
import BookDisplayChapterPage from './BookDisplayChapterPage.vue'

export default {
  name: 'BookDisplayChapter',
  components: {
    BookDisplayChapterPage
  },
  props: {
    chapterContent: String
  },
  data: function () {
    return {
      currentPage: 1
    }
  },
  computed: {
    chapterPages: function() {
      return this.chapterContent.split("");
    },
    chapterPageContent: function() {
      return this.chapterPages[this.currentPage-1];
    },
    totalPages: function() {
      // 获取分页总数
      return this.chapterPages.length;
    }
  }

}
</script>


<style scoped>
</style>
