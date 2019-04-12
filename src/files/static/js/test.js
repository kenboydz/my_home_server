/* 测试
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等


let book_display = new Vue({
    el: "#page_test",
    data: {
        all_page: 12,
        current_page: 12
    }
});