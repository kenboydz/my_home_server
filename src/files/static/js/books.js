/* 小说的读取和显示
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

let book_display = new Vue({
    el: "#book_display",
    data: {
        current_book_name: "",
        book_names: null,
        book_info: null,
        book_content: null,
        book_cache: {}
    },
    mounted: function() {
        this.read_book_names();
    },
    methods: {
        read_book_names: async function(event) {
            // 读取小说目录
            $.getJSON("/books/read_book_names", function(data_dict) {
                book_display.book_names = data_dict.book_names;
            });
        },
        read_book: async function(event) {
            // 读取小说内容
            let book_name = event.target.innerText;
            if (book_name in book_display.book_cache) {
                // 已经在缓存区，直接读取
                let cache = book_display.book_cache;
                book_display.book_info = cache[book_name].info;
                book_display.book_content = cache[book_name].content;
                book_display.current_book_name = book_name;
                return;
            } else {
                // 从服务器读取小说
                const param = {
                    'book_name': book_name,
                };
                const argments = {'param': JSON.stringify(param)};
                $.getJSON("/books/read_book", argments, function(data_dict) {
                    book_display.book_info = data_dict.info;
                    book_display.book_content = data_dict.content;
                    book_display.book_cache[book_name] = data_dict;
                    book_display.current_book_name = book_name;
                });
            }
        }
    }
});