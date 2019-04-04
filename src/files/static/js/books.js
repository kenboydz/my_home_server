/* 小说的读取和显示
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

let book_display = new Vue({
    el: "#book_display",
    data: {
        book_names: [],
        current_book_name: "",
        book_info: {},  // 格式 {'title': ..., ...}
        book_struct: {},  // 格式 {'part_name': ['charpter_name',...], ...}
        book_chapters: {},  // 格式 {'chapter_name': xxx, ...}
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
            let dump_into_cache = function(book_name, data_dict) {
                // 记录到缓存器
                let book = {};
                // 记录 book_info
                book.book_info = data_dict.info;
                // 记录 book_struct 和 book_chapters
                book.book_struct = {};  // 清除 book_struct
                book.book_chapters = {};  // 清除 book_chapters
                for (var part_key in data_dict.content) {
                    let part = data_dict.content[part_key];
                    book.book_struct[part_key] = Object.keys(part);
                    Object.assign(book.book_chapters, part);
                }
                book_display.book_cache[book_name] = book;
            };
            let load_from_cache = function(book_name) {
                // 从缓存区装载
                let book = book_display.book_cache[book_name];
                book_display.current_book_name = book_name;
                book_display.book_info = book.book_info;
                book_display.book_struct = book.book_struct;
                book_display.book_chapters = book.book_chapters;
            };
            let book_name = event.target.innerText;
            if (book_name in book_display.book_cache) {
                load_from_cache(book_name);
            } else {
                // 从服务器读取小说到缓存区
                const param = {
                    'book_name': book_name,
                };
                const argments = {'param': JSON.stringify(param)};
                $.getJSON("/books/read_book", argments, function(data_dict) {
                    dump_into_cache(book_name, data_dict);
                    load_from_cache(book_name);
                });
            }
        }
    }
});