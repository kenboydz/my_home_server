/* 小说的读取和显示
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

const PAGE_LENGTH_MAX = 4000;  // 每页显示的字符数

let book_display = new Vue({
    el: "#book_display",
    data: {
        book_names: [],
        is_book_loaded: false,  // 标志当前图书是否已经加载
        current_book_name: "",
        current_book_chapter_name: "",
        current_book_chapter_index: 0,
        current_block_index: 0,  // 每个 chapter 分开显示时的当前 index 值
        page_numbers: [],  // 当前 chapter 分页所需 page_numbers
        book_info: {},  // 格式 {'title': ..., ...}
        book_struct: [],  // 格式 [{'part_name': xxx, 'chapter_names':  [{'chapter_name': 'chapter_name1', 'chapter_index': 0}, ...], ...]
        book_chapters: [],  // 格式 [{"chapter_name": xxx, "chapter_blocks": [[line0, line1,...], ...]},...]
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
        load_book: async function(event) {
            // 读取小说内容

            let dump_into_cache = function(book_name, book_data) {

                let wrap_book_chapter_lines_into_blocks = function(chapters) {
                    // 解析 chapters: [{'chapter_name': xxx, 'chapter_lines': [xxx, xxx, ...]}, ...]
                    // 解析到格式为
                    // 格式 [{"chapter_name": xxx, "chapter_blocks": [[line0, line1,...], ...]},...]
                    let book_chapters = [];
                    for (var i in chapters) {
                        let chapter = chapters[i];
                        let chapter_lines = chapter.chapter_lines;
                        let chapter_blocks = [];
                        let chapter_block = [];
                        let page_length = 0;
                        for (var j in chapter_lines) {
                            let chapter_line = chapter_lines[j];
                            page_length += chapter_line.length;
                            if (page_length <= PAGE_LENGTH_MAX) {
                                chapter_block.push(chapter_line);
                            } else {
                                chapter_blocks.push(chapter_block);
                                chapter_block = [];
                                chapter_block.push(chapter_line);
                                page_length = chapter_line.length;
                            }
                        }
                        chapter_blocks.push(chapter_block);  // 保存最后的 chapter_block
                        let new_chapter = {'chapter_name': chapter.chapter_name,
                                           'chapter_blocks': chapter_blocks};
                        book_chapters.push(new_chapter);
                    }
                    return book_chapters;
                };

                let book = {};
                // 记录 book_info 和 book_struct
                book.book_info = book_data.info;
                book.book_struct = book_data.struct;
                // 记录并修改 book_chapters 到 blocks
                book.book_chapters = wrap_book_chapter_lines_into_blocks(book_data.chapters);
                // 保存到缓存
                book_display.book_cache[book_name] = book;
            };

            let load_from_cache = function(book_name) {
                // 从缓存区装载
                let book = book_display.book_cache[book_name];
                book_display.current_book_name = book_name;
                book_display.book_info = book.book_info;
                book_display.book_struct = book.book_struct;
                book_display.book_chapters = book.book_chapters;
                book_display.is_book_loaded = true;
                book_display.page_numbers_calculate_();
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
                $.getJSON("/books/load_book", argments, function(data_dict) {
                    // data_dict 格式
                    // {
                    //     'info': {'title': xxx, 'author': xxx, 'language': xxx},
                    //     'struct': [{'part_name': xxx,
                    //                 'chapter_names': [{'chapter_name': xxx, 'chapter_index': xxx}, ...]},
                    //             ...],
                    //     'chapters': [{'chapter_name': xxx, 'chapter_lines': [xxx, xxx, ...]}, ...]
                    // }
                    dump_into_cache(book_name, data_dict);
                    load_from_cache(book_name);
                });
            }
        },
        chapter_selected: function(event) {
            this.current_book_chapter_index = event.target.attributes['chapter-index'].value;
            this.current_book_chapter_name = event.target.attributes['chapter-name'].value;
            this.current_block_index = 0;
            $('#book_store').removeClass('show');  // 关闭折叠
            $('#book_info').removeClass('show');  // 关闭折叠
        },
        page_numbers_calculate_: function() {
            if (!book_display.is_book_loaded) {
                return;
            }
            let max_index = book_display.book_chapters[book_display.current_book_chapter_index]['chapter_blocks'].length;
            const start_page = Math.max(1, Math.min(max_index-4, book_display.current_block_index - 1));
            const end_page = Math.min(max_index, start_page+4);
            book_display.page_numbers = [];
            for (var i=start_page;i<=end_page;i++) {
                book_display.page_numbers.push(i);
            }
        },
        page_nav_clicked: function(event) {
            book_display.current_block_index = event.target.innerText - 1;
            $('body,html').animate({scrollTop: 0}, 500);
        }
    },
    watch: {
        current_book_chapter_index: function() {
            book_display.page_numbers_calculate_();
        },
        current_block_index: function() {
            book_display.page_numbers_calculate_();
        }
    }
});