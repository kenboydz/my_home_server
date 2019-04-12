/* 测试
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

Vue.component('my-pagination', {
    data: function () {
      return {
        count: 0
      }
    },
    props: ['post'],
    template: `
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    `
  });

new Vue({ el: '#page-test' });