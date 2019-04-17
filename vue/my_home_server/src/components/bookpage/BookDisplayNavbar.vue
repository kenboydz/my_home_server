<template>

  <div>
    <div
      id="book-bar-show-control"
      @click="showNavbar = !showNavbar"
    >
    </div>
    <div id="book-bar-float" v-show="showNavbar">
      <b-dropdown text="Go" class="m-md-2">
        <b-dropdown-item>Go1</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Go2</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Go3</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>

  <!-- <div role="tablist">
    <b-card no-body class="mb-1" bg-variant="dark" text-variant="white">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="dark">Part 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-list-group>
            <b-list-group-item variant="dark" href="#">Chapter 1</b-list-group-item>
            <b-list-group-item variant="dark" href="#" active>Chapter 2</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 3</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 4</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 5</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1" bg-variant="dark" text-variant="white">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="dark">Part 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-list-group>
            <b-list-group-item variant="dark" href="#">Chapter 6</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 7</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 8</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 9</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 10</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1" bg-variant="dark" text-variant="white">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="dark">Part 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-list-group>
            <b-list-group-item variant="dark" href="#">Chapter 11</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 12</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 13</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 14</b-list-group-item>
            <b-list-group-item variant="dark" href="#">Chapter 15</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div> -->

</template>


<script>

export default {
  name: 'BookNavbar',
  data: function () {
    return {
      showNavbar: false
    }
  }
}
</script>


<style scoped>
#book-bar-show-control {
  z-index: 9999;
  position: fixed;
  top: 200px;
  left: 200px;
  height: 500px;
  width: 500px;
}

#book-bar-float {
  z-index: 9998;
  position: fixed;
  top:0px;
  left:0px;
}
</style>
