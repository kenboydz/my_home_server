<template>

  <book-display-chapter-page :chapter-page-content="chapterPageContent" />

</template>


<script>
import BookDisplayChapterPage from './BookDisplayChapterPage.vue'

export default {
  name: 'BookDisplayChapter',
  components: {
    BookDisplayChapterPage
  },
  props: {
    chapterContent: {
      type: String,
      default: ""
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
      maxPage: 1,
      chapterPages: []  // 将 chapterContent 分割成的多页
    }
  },
  mounted: function() {
    // this.windowHeight = window.innerHeight+"px";
    this.update_chapter_content();
  },
  watch: {
    chapterContent: function() {
      this.update_chapter_content();
    }
  },
  computed: {
    chapterPageContent: function() {
      const currentPage = Math.max(1, Math.min(this.maxPage, this.currentPage));
      return this.chapterPages[currentPage-1];
    }
  },
  methods: {
    update_chapter_content: function() {
      // 根据规则，将 chapterContent 分割成 list
      this.chapterPages = this.chapterContent.split("");
      // 向父组件返回最大页数值
      this.maxPage = this.chapterPages.length;
      this.$emit('update:max-page', this.maxPage);
    }
  }
}
</script>


<style scoped>
</style>
