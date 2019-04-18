<template>

  <b-container fluid>
    {{ currentPageLocal }} / {{ maxPage }}
    <b-form-input v-model="currentPageLocal" type="range" min="1" :max="maxPage"></b-form-input>
  </b-container>

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
  data: function () {
    return {
      currentPageLocal: 1
    }
  },
  watch: {
    currentPageLocal: function() {
      this.$emit('update:current-page', parseInt(this.currentPageLocal));
    },
    currentPage: function() {
      this.currentPageLocal = this.currentPage;
    }
  }
}
</script>


<style scoped>
</style>
