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
        book_info: {},  // 格式 {'title': ..., ...}
        book_struct: [],  // 格式 [{'part_name': xxx, 'chapter_names':  [{'name': 'chapter_name1', 'index': 0...}, ...], ...]
        book_chapters: [],  // 格式 [{"name": xxx, "line_blocks": [[line0, line1,...], ...]},...]
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

                let parse_book_struct = function(book_data) {
                    // 解析 book_struct
                    // 格式为
                    // 格式 [{'part_name': xxx, 'chapter_names':  [{'name': 'chapter_name1', 'index': 0...}, ...], ...]
                    let book_struct = [];  // 清除 book_struct
                    let chapter_index = 0;
                    for (var part_key in book_data.content) {
                        let part = book_data.content[part_key];
                        let part_struct = {};
                        part_struct['part_name'] = part_key;
                        let chapter_names = [];
                        for (var chapter_key in part) {
                            chapter_names.push({'name': chapter_key, 'index': chapter_index});
                            chapter_index += 1;
                        }
                        part_struct['chapter_names'] = chapter_names;
                        book_struct.push(part_struct);
                    }
                    return book_struct;
                };

                let parse_book_chapters = function(book_data) {
                    // 解析 book_chapters
                    // 解析格式为
                    // 格式 [{"name": xxx, "line_blocks": [[line0, line1,...], ...]},...]
                    let book_chapters = [];  // 清除 book_chapters
                    for (var part_key in book_data.content) {
                        let part = book_data.content[part_key];
                        // 构建 "line_blocks": [[line0, line1], [line2, line3], ...]
                        for (var chapter_key in part) {
                            let lines = part[chapter_key];
                            let line_blocks = [];
                            let line_block = [];
                            let page_length = 0;
                            for (var i in lines) {
                                page_length += lines[i].length;
                                if (page_length <= PAGE_LENGTH_MAX) {
                                    line_block.push(lines[i]);
                                } else {
                                    line_blocks.push(line_block);
                                    line_block = [];
                                    line_block.push(lines[i]);
                                    page_length = lines[i].length;
                                }
                            }
                            line_blocks.push(line_block);  // 保存最后的 line_block
                            let chapter = {'name': chapter_key,
                                           'line_blocks': line_blocks};
                            book_chapters.push(chapter);
                        }
                    }
                    return book_chapters;
                };

                let book = {};
                // 记录 book_info
                book.book_info = book_data.info;
                // 记录 book_struct 和 book_chapters
                book.book_struct = parse_book_struct(book_data);
                book.book_chapters = parse_book_chapters(book_data);
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
                    //     'info': {
                    //         'title': xxx,
                    //         'author': xxx,
                    //         'language': xxx
                    //     },
                    //     'content': {
                    //         'part name 01': {
                    //             'chapter name 01': xxx,
                    //             'chapter name 02': xxx
                    //         },
                    //         'part name 02': {
                    //             'chapter name 03': xxx,
                    //             'chapter name 04': xxx
                    //         }
                    //     }
                    // }
                    dump_into_cache(book_name, data_dict);
                    load_from_cache(book_name);
                });
            }
        },
        page_items: function(event) {
            if (this.is_book_loaded) {
                let all_pages = this.book_chapters[current_book_chapter_index]['line_blocks'].length;
            }
        }
    }
});