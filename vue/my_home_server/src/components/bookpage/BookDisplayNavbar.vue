<template>

  <!-- <div> -->
    <!-- 控制显示和翻页的透明按钮 -->
    <!-- <div id="book-navbar-show-btn" @click="onToggleShow"></div>
    <div id="book-navbar-left_page_btn" @click="onTurnPage(false)"></div>
    <div id="book-navbar-right_page_btn" @click="onTurnPage(true)"></div> -->
    <!-- 悬浮显示控制菜单 -->
    <!-- <div v-show="showNavbar"> -->
      <!-- 书籍目录 -->
      <!-- <BookDisplayNavbarMenu class="book-navbar-float"
        :book-menu="bookMenu"
        :current-chapter.sync="currentChapterLocal"
      /> -->
      <!-- 页码选择 -->
      <!-- <BookDisplayNavbarRange class="book-navbar-float"
        :max-page="maxPage"
        :current-page.sync="currentPageLocal"
      />
    </div>
  </div> -->
  
  <div>

    <b-navbar type="dark" variant="dark" fixed="bottom" v-show="showNavbar">
      <b-navbar-nav><b-container><b-row>
        <!-- 书籍目录显示 -->
        <b-col cols="2">
          <!-- <b-nav-text>
              <BookDisplayNavbarMenu class="book-navbar-float"
              :book-menu="bookMenu"
              :current-chapter.sync="currentChapterLocal"
            />
          </b-nav-text> -->
          <b-nav-text><b-button size="sm">G1</b-button></b-nav-text>
        </b-col>
        <!-- 功能2 -->
        <b-col cols="2">
          <b-nav-text><b-button size="sm">G2</b-button></b-nav-text>
        </b-col>
        <!-- 功能3 -->
        <b-col cols="2">
          <b-nav-text><b-button size="sm">G3</b-button></b-nav-text>
        </b-col>
        <!-- 页码选择 -->
        <b-col cols="6">
          <b-nav-text>
            <BookDisplayNavbarRange
              :max-page="maxPage"
              :current-page.sync="currentPageLocal"
            />
          </b-nav-text>
        </b-col>
      </b-row></b-container></b-navbar-nav>

    </b-navbar>
    
    <div id="book-navbar-show-btn" @click="onToggleShow"></div>
    <div id="book-navbar-left_page_btn" @click="onTurnPage(false)"></div>
    <div id="book-navbar-right_page_btn" @click="onTurnPage(true)"></div>

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
  data: function () {
    return {
      showNavbar: false
    }
  },
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
    onToggleShow: function() {
      // 转换显示标志
      this.showNavbar = !this.showNavbar;
      this.$emit('update:show-navbar', this.showNavbar);
    },
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
#book-navbar-show-btn {
  z-index: 1000;
  position: fixed;
  top: 0vh;
  left: 35vw;
  height: 100vh;
  width: 30vw;
  border: solid red;
}

#book-navbar-left_page_btn {
  z-index: 1000;
  position: fixed;
  top: 00vh;
  left: 0vw;
  height: 100vh;
  width: 35vw;
}

#book-navbar-right_page_btn {
  z-index: 1000;
  position: fixed;
  top: 00vh;
  left: 65vw;
  height: 100vh;
  width: 35vw;
}
</style>
