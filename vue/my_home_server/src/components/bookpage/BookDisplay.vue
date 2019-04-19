<template>

  
  <v-app dark>
    
    <!-- <BaseFramework id="the-header-display" v-show="showNavbar" /> -->
    <BaseFramework v-show="showNavbar" />

    <v-content>

      <!-- 书目导航 -->
      <BookDisplayNavbar
        :max-page="maxPage"
        :book-menu="bookMenu"
        :current-page.sync="currentPage"
        :current-chapter.sync="currentChapter"
        @update:show-navbar="showNavbar = $event"
      />

      <!-- chapter 显示 -->
      <BookDisplayChapter
        :chapter-content="chapterContent"
        :current-page="currentPage"
        @update:max-page="maxPage = $event"
      />
    </v-content>

    <!-- <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/YeRKwQ" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
  </v-app>

  <!-- <b-container fluid> -->
    <!-- 全局导航栏 -->
    <!-- <TheHeader id="the-header-display" v-show="showNavbar" /> -->
    <!-- 书目导航 -->
    <!-- <BookDisplayNavbar
      :max-page="maxPage"
      :book-menu="bookMenu"
      :current-page.sync="currentPage"
      :current-chapter.sync="currentChapter"
      @update:show-navbar="showNavbar = $event"
    /> -->
    <!-- <b-row><b-col> -->
      <!-- chapter 显示 -->
      <!-- <BookDisplayChapter
        :chapter-content="chapterContent"
        :current-page="currentPage"
        @update:max-page="maxPage = $event"
      /> -->
    <!-- </b-col></b-row> -->
  <!-- </b-container> -->

</template>


<script>
import BaseFramework from '../common/BaseFramework.vue'
import BookDisplayNavbar from './BookDisplayNavbar.vue'
import BookDisplayChapter from './BookDisplayChapter.vue'

export default {
  name: 'BookDisplay',
  components: {
    BaseFramework,
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
        {index:3, name: 'part3', chapters: [{index:1, name: 'chapter5'}, {index:2, name: 'chapter6'}]}
      ],
      currentChapter: {partIndex: 1, chapterIndex: 11},
      showNavbar: false
    }
  }
}
</script>


<style scoped>
</style>
