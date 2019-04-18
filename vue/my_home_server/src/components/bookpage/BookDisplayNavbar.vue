<template>

  <div>
    <div id="book-bar-show-btn" @click="showNavbar = !showNavbar"></div>
    <div id="book-bar-left_page_btn" @click="showNavbar = !showNavbar"></div>
    <div id="book-bar-right_page_btn" @click="showNavbar = !showNavbar"></div>
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
#book-bar-float {
  z-index: 1000;
  position: fixed;
  top:0px;
  left:0px;
}

#book-bar-show-btn {
  z-index: 1100;
  position: fixed;
  top: 0vh;
  left: 35vw;
  height: 100vh;
  width: 30vw;
  border:blue solid;
}

#book-bar-left_page_btn {
  z-index: 1100;
  position: fixed;
  top: 0vh;
  left: 0vw;
  height: 100vh;
  width: 35vw;
  border:red solid;
}

#book-bar-right_page_btn {
  z-index: 1100;
  position: fixed;
  top: 0vh;
  left: 65vw;
  height: 100vh;
  width: 30vw;
  border:red solid;
}
</style>
