<template>

  <b-container>
    <!-- 全局导航栏 -->
    <b-row align-v="start"><b-col>
      <the-header />
    </b-col></b-row>
    <!-- book 显示 -->
    <b-row>
      <!-- 章节导航 -->
      <b-col>
        <book-navbar />
      </b-col>
      <!-- 分页和内容显示 -->
      <b-col>
        <!-- 顶部分页 -->
        <b-row align-v="start">
          <b-col>
            <pagination-bar />
          </b-col>
        </b-row>
        <!-- 内容显示 -->
        <b-row>
          <b-col>
            <book-chapter-display chapter-content="fdsafjasl" />
          </b-col>
        </b-row>
        <!-- 底部分页 -->
        <b-row align-v="end">
          <b-col>
            <pagination-bar />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import BookNavbar from '../components/BookNavbar.vue'
import BookChapterDisplay from '../components/BookChapterDisplay.vue'
import PaginationBar from '../components/PaginationBar.vue'

export default {
  name: 'BookPage',
  components: {
    TheHeader,
    BookNavbar,
    BookChapterDisplay,
    PaginationBar
  }
}
</script>


<style scoped>
</style>

