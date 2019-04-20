<template>

  <v-navigation-drawer
      v-model="showUpLocal"
      absolute
    >
    <list>
      <v-list-group
        no-action
        v-for="part in bookMenu"
        :key="part.index"
        :value="currentChapter.partIndex === part.index"
      >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>bookmarks</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="part.name"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action
            v-if="currentChapter.partIndex === part.index"
          >
            <v-icon>flag</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
      <v-list-tile
        v-for="chapter in part.chapters"
        :key="chapter.index"
        @click="onChapterSelect(part.index, chapter.index)"
      >
        <v-list-tile-action>
          <v-icon>bookmark</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="chapter.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action
          v-if="currentChapter.partIndex === part.index && currentChapter.chapterIndex === chapter.index"
        >
          <v-icon>flag</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      </v-list-group>
    </list>
  </v-navigation-drawer>

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
    },
    showUp: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showUpLocal: {
      get: function() {
        return this.showUp;
      },
      set: function(toShowUp) {
        this.$emit('update:show-up', toShowUp);
      }
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
