<template>
  <div id="app">
    <BaseButton text="button"/>
  </div>
</template>

<script>
import BaseButton from './components/BaseButton.vue'

export default {
  name: 'app',
  components: {
    BaseButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
