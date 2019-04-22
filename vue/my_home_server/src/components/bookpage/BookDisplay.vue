<template>

  <v-app dark>

    <TheHeader id="book-header-navbar" v-show="showHeaderNavbar" />
    <v-btn id="book-header-navbar-showup-btn"
      block
      flat
      v-ripple="false"
      @click="showHeaderNavbar = !showHeaderNavbar"
    ></v-btn>

    <!-- 书目导航 -->
    <BookDisplayNavbar
      id="book-display-navbar"
      :max-page="maxPage"
      :book-menu="bookMenu"
      :current-page.sync="currentPage"
      :current-chapter.sync="currentChapter"
    />

    <!-- chapter 显示 -->
    <BookDisplayChapter
      id="book-display-chapter"
      :chapter-content="chapterContent"
      :current-page="currentPage"
      @update:max-page="maxPage = $event"
    />
  
  </v-app>

</template>


<script>
import TheHeader from '../common/TheHeader.vue'
import BookDisplayNavbar from './BookDisplayNavbar.vue'
import BookDisplayChapter from './BookDisplayChapter.vue'

export default {
  name: 'BookDisplay',
  components: {
    TheHeader,
    BookDisplayNavbar,
    BookDisplayChapter
  },
  data: function () {
    return {
      chapterContent: `fjsklajflakvnalfwajrqw;`,
      currentPage: 1,
      maxPage: 1,
      bookMenu: [
        {index:1, name: 'part1', chapters: [{index:1, name: 'chapter1'}, {index:2, name: 'chapter2'}]},
        {index:2, name: 'part2', chapters: [{index:1, name: 'chapter3'}, {index:2, name: 'chapter4'}]},
        {index:3, name: 'part3', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]},
        {index:4, name: 'part4', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]},
        {index:5, name: 'part5', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]},
        {index:6, name: 'part6', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]},
        {index:7, name: 'part7', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]}
      ],
      currentChapter: {partIndex: 1, chapterIndex: 1},
      showHeaderNavbar: false
    }
  }
}
</script>


<style scoped>
#book-header-navbar {
  z-index: 300;
  position: fixed;
}

#book-header-navbar-showup-btn {
  z-index: 200;
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 20vh;
  width: 100vw;
  /* border: solid green; */
}

#book-display-navbar {
  z-index: 200;
}

#book-display-chapter {
  position: fixed;
}
</style>
