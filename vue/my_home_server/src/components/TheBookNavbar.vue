<template>

  <el-menu
    :default-active="pageActived"
    mode="vertical"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="part1">
      <template slot="title">Part1</template>
      <el-menu-item index="part1-chapter1">Chapter1</el-menu-item>
      <el-menu-item index="part1-chapter2">Chapter2</el-menu-item>
      <el-menu-item index="part1-chapter3">Chapter3</el-menu-item>
    </el-submenu>
    <el-submenu index="part2">
      <template slot="title">Part2</template>
      <el-menu-item index="part2-chapter4">Chapter4</el-menu-item>
      <el-menu-item index="part2-chapter5">Chapter5</el-menu-item>
      <el-menu-item index="part2-chapter6">Chapter6</el-menu-item>
    </el-submenu>
  </el-menu>

</template>


<script>

export default {
  name: 'TheBookNavbar',
  data() {
    return {
      activeIndex: 'part1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style scoped>
.el-menu {
  width: 200px;
}
</style>
