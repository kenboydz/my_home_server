<template>

    <v-slider
      v-model.number.lazy="currentPageLocal"
      thumb-label="always"
      :max="maxPage"
      min="1"
      prepend-icon="keyboard_arrow_left"
      @click:prepend="currentPageLocal -= 1"
      append-icon="keyboard_arrow_right"
      @click:append="currentPageLocal += 1"
    ></v-slider>

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
