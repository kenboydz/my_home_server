<template>

  <div>
    {{ currentPageLocal }} / {{ maxPage }}
    <b-form-input v-model.number.lazy="currentPageLocal" type="range" min="1" :max="maxPage"></b-form-input>
  </div>

</template>


<script>

export default {
  name: 'BookNavbarRange',
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
  }
}
</script>


<style scoped>
</style>
