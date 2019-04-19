<template>

  <v-navigation-drawer
      v-model="showUpLocal"
      absolute
    >
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
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
