<template>

  <div>
    <div id="book-navbar-show-btn" @click="onToggleShow"></div>
    <div id="book-navbar-left_page_btn" @click="onTurnPage(false)"></div>
    <div id="book-navbar-right_page_btn" @click="onTurnPage(true)"></div>
    <div class="book-navbar-float" v-show="showNavbar">
      <b-dropdown text="Go" class="m-md-2">
        <b-dropdown-item>Go1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Go2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Go3</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="book-navbar-float" v-show="showNavbar">
      <BookDisplayNavbarMenu :book-menu="bookMenu" :current-chapter.sync="currentChapter"/>
      <BookDisplayNavbarRange :max-page="maxPage" :current-page.sync="currentPage"/>
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
    bookMenu: {
      type: Array,
      default: []
    }
  },
  data: function () {
    return {
      showNavbar: false,
      currentChapter: {partIndex: 1, chapterIndex: 12},
      currentPage: 1
    }
  },
  watch: {
    currentPage: function() {
      this.$emit('update:current-page', this.currentPage);
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
        this.currentPage += 1;
      } else {
        this.currentPage -= 1;
      }
      this.currentPage = Math.max(1, Math.min(this.maxPage, this.currentPage));
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
  top: 0vh;
  left: 35vw;
  height: 100vh;
  width: 30vw;
  border:blue solid;
}

#book-navbar-left_page_btn {
  z-index: 1000;
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 35vw;
  border:red solid;
}

#book-navbar-right_page_btn {
  z-index: 1000;
  position: fixed;
  top: 0vh;
  left: 65vw;
  height: 100vh;
  width: 30vw;
  border:red solid;
}
</style>
