<template>
  <div id="app">
      <el-container>
        <el-header>
          <TheNavbar />
        </el-header>
        <el-main>
          <BaseButton text="button"/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue'
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'app',
  components: {
    BaseButton,
    TheNavbar
  }
}
</script>

<style>
</style>
