<template>

  <div>
    <!-- 控制显示和翻页的透明按钮 -->
    <div id="book-navbar-show-btn" @click="onToggleShow"></div>
    <div id="book-navbar-left_page_btn" @click="onTurnPage(false)"></div>
    <div id="book-navbar-right_page_btn" @click="onTurnPage(true)"></div>
    <!-- 悬浮显示控制菜单 -->
    <div class="book-navbar-float" v-show="showNavbar">
      <!-- 书记目录 -->
      <BookDisplayNavbarMenu :book-menu="bookMenu" :current-chapter.sync="currentChapterLocal"/>
      <!-- 页码选择 -->
      <BookDisplayNavbarRange :max-page="maxPage" :current-page.sync="currentPageLocal"/>
    </div>
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
.book-navbar-float {
  z-index: 1100;
  position: fixed;
  top: 70vh;
  left: 0vh;
}

#book-navbar-show-btn {
  z-index: 1000;
  position: fixed;
  top: 10vh;
  left: 35vw;
  height: 80vh;
  width: 30vw;
  border:blue solid;
}

#book-navbar-left_page_btn {
  z-index: 1000;
  position: fixed;
  top: 10vh;
  left: 0vw;
  height: 80vh;
  width: 35vw;
  border:red solid;
}

#book-navbar-right_page_btn {
  z-index: 1000;
  position: fixed;
  top: 10vh;
  left: 65vw;
  height: 80vh;
  width: 35vw;
  border:red solid;
}
</style>
