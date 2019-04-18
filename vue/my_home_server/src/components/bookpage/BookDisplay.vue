<template>

  <div>
    <!-- 导航 -->
    <div>
      <BookDisplayNavbar
        :max-page="maxPage"
        :book-menu="bookMenu"
        :current-page.sync="currentPage"
        :current-chapter.sync="currentChapter"
      />
    </div>
    <b-row>
      <!-- chapter 显示 -->
      <b-col>
        <BookDisplayChapter
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
      maxPage: 1,
      bookMenu: [
        {index:1, name: 'part1', chapters: [{index:11, name: 'chapter1'}, {index:12, name: 'chapter2'}]},
        {index:2, name: 'part2', chapters: [{index:23, name: 'chapter3'}, {index:24, name: 'chapter4'}]},
        {index:3, name: 'part3', chapters: [{index:35, name: 'chapter5'}, {index:36, name: 'chapter6'}]}
      ],
      currentChapter: {partIndex: 1, chapterIndex: 11}
    }
  }
}
</script>


<style scoped>
</style>
