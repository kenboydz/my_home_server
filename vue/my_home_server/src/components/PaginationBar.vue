<template>

  <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>

</template>


<script>
export default {
  name: 'PaginationBar'
}
</script>


<style scoped>
</style>
