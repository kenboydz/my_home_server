<template>
  <v-app dark>
    this is home page
    <TheHeader />
  </v-app>
</template>

<script>
import TheHeader from '../components/common/TheHeader.vue'

export default {
  name: 'HomePage',
  components: {
    TheHeader
  }
}
</script>
