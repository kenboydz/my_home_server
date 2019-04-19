<template>

  <div>

    <v-navigation-drawer
      v-model="headerDrawer"
      fixed
      clipped
      app
    >
      <v-list dense>

        <v-list-tile href="#">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="#">
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Book
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-subheader class="mt-3 grey--text text--darken-1">Book</v-subheader>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="grey darken-1">All</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">En</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="grey darken-1">CN</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="headerDrawer = !headerDrawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">DR Home</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>perm_identity</v-icon>
    </v-toolbar>

  </div>

</template>


<script>
export default {
  name: 'BaseFramework',
  data: () => ({
      headerDrawer: null
  })
}
</script>


<style scoped>
</style>
