/* 小说的读取和显示
*/
'use strict';  // 严格模式，变量使用前需要先声明、无法删除变量等

let noval_display = new Vue({
    el: "#noval_display",
    data: {
        current_noval_name: "",
        noval_manu: null,
        noval_info: null,
        noval_content: null,
        noval_cache: {}
    },
    mounted: function() {
        this.read_manu();
    },
    methods: {
        read_manu: async function(event) {
            // 读取小说目录
            $.getJSON("/books/read_manu", function(data_dict) {
                noval_display.noval_manu = data_dict.noval_manu;
            });
        },
        read_noval: async function(event) {
            // 读取小说内容
            let noval_name = event.target.innerText;
            if (noval_name in noval_display.noval_cache) {
                // 已经在缓存区，直接读取
                let cache = noval_display.noval_cache;
                noval_display.noval_info = cache[noval_name].info;
                noval_display.noval_content = cache[noval_name].content;
                noval_display.current_noval_name = noval_name;
                return;
            } else {
                // 从服务器读取小说
                const param = {
                    'noval_name': noval_name,
                };
                const argments = {'param': JSON.stringify(param)};
                $.getJSON("/books/read_noval", argments, function(data_dict) {
                    noval_display.noval_info = data_dict.info;
                    noval_display.noval_content = data_dict.content;
                    noval_display.noval_cache[noval_name] = data_dict;
                    noval_display.current_noval_name = noval_name;
                });
            }
        }
    }
});