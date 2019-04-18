<template>

  <div>
    <b-form-input id="book-display-nav-bar-range-page-show"
      v-model.number.lazy="currentPageLocal"
      type="range"
      min="1"
      :max="maxPage"
      @change="onInputRangeChanged"
    ></b-form-input>
    <b-tooltip
      ref="pageShowToolTips"
      target="book-display-nav-bar-range-page-show"
      placement="top"
    >
     {{ currentPageLocal }} / {{ maxPage }}
    </b-tooltip>
  </div>

</template>


<script>

export default {
  name: 'BookDisplayNavbarRange',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    maxPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    currentPageLocal: {
      get: function() {
        return this.currentPage;
      },
      set: function(page) {
        this.$emit('update:current-page', page);
      }
    }
  },
  methods: {
    onInputRangeChanged: function() {
      this.$refs.pageShowToolTips.$emit('open')
    }
  }
}
</script>


<style scoped>
</style>
