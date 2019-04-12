/* 测试
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

Vue.component('my-pagination', {
    data: function () {
      return {
        count: 0
      }
    },
    props: ['all', 'current'],
    template: `
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{'disabled': current == 1}">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"
                v-for="index in indexes"
                :class="{'active': current==index}">
                <a class="page-link" href="#">{{ index }}</a>
            </li>
            <li class="page-item" :class="{'disabled': current == all}">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    `,
    computed: {
        indexes: function(){
            // 最多只显示五个分页数
            const MAX_PAGE_SHOW = 5;  // 必须是奇数
            let left = 1;
            let right = this.all;
            if (this.all > MAX_PAGE_SHOW) {
                const offset = Math.floor(MAX_PAGE_SHOW / 2);
                if (this.current <= offset) {
                    left = 1;
                    right = MAX_PAGE_SHOW;
                } else if (this.current > this.all - offset) {
                    left = this.all - MAX_PAGE_SHOW;
                    right = this.all;
                } else {
                    left = this.current - offset;
                    right = this.current + offset;
                }
            }
            let numbers = [];
            while (left <= right){
                numbers.push(left);
                left ++;
            }
            return numbers;
       }
    }
  });


let book_display = new Vue({
    el: "#page_test",
    data: {
        all_page: 12,
        current_page: 12
    }
});