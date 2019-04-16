<template>

    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      fixed="top"
      sticky="true">

      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Home</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Book" right>
            <b-dropdown-item href="#">All</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>

</template>


<script>

export default {
  name: 'TheHeader'
}
</script>


<style scoped>
</style>
