<template>

  <div id="book-navbar-full-screen">
    <BookDisplayNavbarMenu
      :show-up.sync="showBookMenu"
      :book-menu="bookMenu"
      :current-chapter.sync="currentChapterLocal"
    />
    <v-bottom-sheet v-model="bottomSheetShowUp">
      <template v-slot:activator>
        <v-btn
          id="book-navbar-show-btn"
          fixed
          block
          flat
          v-ripple="false"
        ></v-btn>
      </template>
      <v-card tile>
        <BookDisplayNavbarRange
          :max-page="maxPage"
          :current-page.sync="currentPageLocal"
        />
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-btn icon
                @click="showBookMenu = !showBookMenu; bottomSheetShowUp = false;"
              >
                <v-icon>list</v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-spacer></v-spacer>
            
            <v-list-tile-action>
              <v-btn icon>
                <v-icon>more_horiz</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-bottom-sheet>

    <v-btn id="book-navbar-left_page_btn"
      fixed
      block
      flat
      v-ripple="false"
      @click="onTurnPage(false)"></v-btn>
    <v-btn id="book-navbar-right_page_btn"
      fixed
      block
      flat
      v-ripple="false"
      @click="onTurnPage(true)"></v-btn>
  </div>

</template>


<script>
import BookDisplayNavbarMenu from './BookDisplayNavbarMenu.vue'
import BookDisplayNavbarRange from './BookDisplayNavbarRange.vue'

export default {
  name: 'BookDisplayNavbar',
  components: {
    BookDisplayNavbarMenu,
    BookDisplayNavbarRange
  },
  props: {
    maxPage: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    bookMenu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    currentChapter: {
      type: Object,
      default: function() {
        return {partIndex: 1, chapterIndex: 1};
      }
    }
  },
  data: () => ({
    bottomSheetShowUp: false,
    showBookMenu: false
  })
  ,
  computed: {
    currentPageLocal: {
      get: function() {
        return this.currentPage;
      },
      set: function(page) {
        page = Math.max(1, Math.min(this.maxPage, page));
        this.$emit('update:current-page', page);
      }
    },
    currentChapterLocal: {
      get: function() {
        return this.currentChapter;
      },
      set: function(chapter) {
      this.$emit('update:current-chapter', chapter);
      }
    }
  },
  methods: {
    onTurnPage: function(toNextPage) {
      // 翻页事件，默认翻到下一页
      if (toNextPage) {
        this.currentPageLocal += 1;
      } else {
        this.currentPageLocal -= 1;
      }
    }
  }
}
</script>


<style scoped>
/* #book-navbar-full-screen {
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 100vw;
} */

#book-navbar-show-btn {
  top: 80vh;
  left: 0vw;
  height: 20vh;
  width: 100vw;
  border: solid red;
}

#book-navbar-left_page_btn {
  top: 20vh;
  left: 0vw;
  height: 60vh;
  width: 50vw;
  border: solid blue;
}

#book-navbar-right_page_btn {
  top: 20vh;
  left: 50vw;
  height: 60vh;
  width: 50vw;
  border: solid blue;
}
</style>
