<template>

  <b-container id="book-page-container" class="bg-secondary" fluid>
    <!-- 全局导航栏 -->
    <b-row align-v="start"><b-col>
      <the-header />
    </b-col></b-row>
    <!-- book 显示 -->
    <b-row><b-col>
      <book-display />
    </b-col></b-row>
  </b-container>

</template>

<script>
import TheHeader from '../components/common/TheHeader.vue'
import BookDisplay from '../components/bookpage/BookDisplay.vue'

export default {
  name: 'BookPage',
  components: {
    TheHeader,
    BookDisplay
  }
}
</script>


<style scoped>
</style>

