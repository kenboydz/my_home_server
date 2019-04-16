<template>

  <b-container>

    <b-row align-v="start"><b-col>
      <the-header />
    </b-col></b-row>

    <b-row>
      <b-col>
        <the-book-navbar />
      </b-col>
      <b-col>
        <the-book-main />
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheBookNavbar from '../components/TheBookNavbar.vue'
import TheBookMain from '../components/TheBookMain.vue'

export default {
  name: 'BookPage',
  components: {
    TheHeader,
    TheBookNavbar,
    TheBookMain
  }
}
</script>


<style scoped>
.el-container {
  background-color: rgb(47, 49, 53);
}

.el-aside {
  height: 1000px;
  text-align: left;
}

.el-main {
  height: 1000px;
}
  /* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } */
  
  /* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */
  
  /* .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  } */
  
  /* body > .el-container {
    margin-bottom: 40px;
  } */
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */
  
  /* .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>

