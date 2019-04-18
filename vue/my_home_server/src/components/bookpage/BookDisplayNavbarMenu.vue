<template>

  <b-list-group>
    <b-list-group-item>
      <div v-for="part in bookMenu" :key="part.index">
        <b-button v-b-toggle="'book-display-navbar-index-' + part.index" class="m-1" variant="light">
          {{ part.name }}
        </b-button>
        <b-collapse :id="'book-display-navbar-index-' + part.index">
          <b-list-group>
            <b-list-group-item
              href="#"
              :class="{active: currentChapter.chapterIndex == chapter.index}"
              v-for="chapter in part.chapters"
              :key="chapter.index"
              @click="onChapterSelect(part.index, chapter.index)"
              >
              {{ chapter.name }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
    </b-list-group-item>
  </b-list-group>

</template>


<script>

export default {
  name: 'BookDisplayNavbarMenu',
  props: {
    bookMenu: {  // 目录结构： [{index: xxx, name: xxx, chapters: [{index: xxx, name: xxx}, ...]}, ...]
      type: Array,
      required: true
    },
    currentChapter: {
      type: Object,
      default: {partIndex: 1, chapterIndex: 1}
    }
  },
  methods: {
    onChapterSelect: function(partIndex, chapterIndex) {
      this.$emit('update:current-chapter', {partIndex: partIndex, chapterIndex: chapterIndex});
    }
  }
  // data: function () {
  //   return {
  //     currentPageLocal: 1,
  //     partId: 'fjskl'
  //   }
  // },
  // watch: {
  //   currentPageLocal: function() {
  //     this.$emit('update:current-page', this.currentPageLocal);
  //   },
  //   currentPage: function() {
  //     this.currentPageLocal = this.currentPage;
  //   }
  // }
}
</script>


<style scoped>
</style>
