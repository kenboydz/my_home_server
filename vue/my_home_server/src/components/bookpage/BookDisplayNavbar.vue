<template>

  <div id="book-navbar-full-screen">
    <v-bottom-sheet>
      <template v-slot:activator>
        <v-btn absolute block flat id="book-navbar-show-btn"></v-btn>
      </template>
      <v-card tile>
        <v-progress-linear
          :value="50"
          class="my-0"
          height="3"
        ></v-progress-linear>

        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>The Walker</v-list-tile-title>
              <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-spacer></v-spacer>

            <v-list-tile-action>
              <v-btn icon>
                <v-icon>fast_rewind</v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-list-tile-action :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon>
                <v-icon>pause</v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon>
                <v-icon>fast_forward</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-bottom-sheet>

    <v-btn absolute block flat id="book-navbar-left_page_btn" @click="onTurnPage(false)"></v-btn>
    <v-btn absolute block flat id="book-navbar-right_page_btn" @click="onTurnPage(true)"></v-btn>
  </div>

  <!-- <v-card
    class="hide-overflow"
    height="200px"
  >
    <v-card-text class="text-xs-center">
      <v-btn
        flat
        color="primary"
        @click="showNavbar = !showNavbar"
      >
        Toggle Nav
      </v-btn>
      <BookDisplayChapter
        :chapter-content="chapterContent"
        :current-page="currentPage"
        @update:max-page="maxPage = $event"
      />
    </v-card-text>

    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNavbar"
      absolute
      color="transparent"
    >
      <v-btn flat color="teal">
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn flat color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card> -->

</template>


<script>
import BookDisplayNavbarMenu from './BookDisplayNavbarMenu.vue'
import BookDisplayNavbarRange from './BookDisplayNavbarRange.vue'
import BookDisplayChapter from './BookDisplayChapter.vue'

export default {
  name: 'BookDisplayNavbar',
  components: {
    BookDisplayNavbarMenu,
    BookDisplayNavbarRange,
    BookDisplayChapter
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
      chapterContent: `fjsklajflakvnalfwajrqw;`,
      currentPage: 1,
      maxPage: 1,
      activeBtn: 1
  }),
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
#book-navbar-full-screen {
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 100vw;
  /* border: solid green; */
}

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
