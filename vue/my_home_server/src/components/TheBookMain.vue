<template>

    <div class="row"><div class="col">
      <p v-for="i in 50" :key="i">
        {{i}}
      </p>
    </div></div>

</template>


<script>
import PaginationBar from '../components/PaginationBar.vue'
import TheBookNavbar from '../components/TheBookNavbar.vue'

export default {
  name: 'TheBookMain',
  components: {
    PaginationBar,
    TheBookNavbar
  }
}
</script>


<style scoped>
</style>
