<template>

  <b-list-group>
    <b-list-group-item v-for="part in bookMenu" :key="part.index">
      <b-button
        v-b-toggle="'book-display-navbar-index-' + part.index"
        class="m-1"
        variant="light"
        :class="{active: currentChapter.partIndex == part.index}"
        >
        {{ part.name }}
      </b-button>
      <b-collapse :id="'book-display-navbar-index-' + part.index">
        <b-list-group>
          <b-list-group-item
            button
            v-for="chapter in part.chapters"
            :class="{active: currentChapter.partIndex == part.index && currentChapter.chapterIndex == chapter.index}"
            :key="chapter.index"
            @click="onChapterSelect(part.index, chapter.index)"
            >
            {{ chapter.name }}
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-list-group-item>
  </b-list-group>

</template>


<script>

export default {
  name: 'BookDisplayNavbarMenu',
  props: {
    bookMenu: {  // 目录结构： [{index: xxx, name: xxx, chapters: [{index: xxx, name: xxx}, ...]}, ...]
      type: Array,
      default: []
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
}
</script>


<style scoped>
#book-display-navbar-menu {
  font-size: 3px;
}
</style>
