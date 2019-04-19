<template>

  <v-navigation-drawer
      v-model="showUpLocal"
      absolute
    >
    <list>
      <v-list-group
        prepend-icon=""
        no-action
        value="true"
        v-for="part in bookMenu"
        :key="part.index"
      >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>bookmarks</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="part.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile
        v-for="chapter in part.chapters"
        :key="chapter.index"
        href="#"
      >
        <v-list-tile-action>
          <v-icon>bookmark</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="chapter.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </v-list-group>
    </list>
  </v-navigation-drawer>

  <!-- <b-list-group>
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
  </b-list-group> -->

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
