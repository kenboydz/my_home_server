# -*- coding: utf-8 -*-
'''my_home_server 中用到的工具集合
'''
import os
import re
import json
import pickle
from xml.dom.minidom import parse
import xml.dom.minidom
import copy


class BookLoader:
    '''读取 book 用 class
    '''
    _book_names = None  # 所有的书名
    _book_paths = None  # 书目对应的保存路径
    _book_cache = {}  # 书籍缓存

    def __init__(self,
                 books_json_path=r'./files/data/books/books.json'):
        '''
        books_json_path: 存放 books.json 的路径
        '''
        self._book_paths = self._read_books_path(books_json_path)
        self._book_names = list(self._book_paths.keys())

    def _read_books_path(self, books_json_path)->dict:
        '''读取 books 中书目信息

        输出格式：
        {'book_name': path, ...}
        '''
        assert os.path.exists(books_json_path),\
            "%s 书籍目录文件不存在" % books_json_path
        with open(books_json_path, 'r', encoding='utf-8') as f:
            book_paths = json.load(f)
        return book_paths

    def _load_book_from_cache(self, book_name)->dict:
        '''从缓存区读取 book_name
        '''
        return self._book_cache.get(book_name, None)

    def _dump_book_into_cache(self, book_name, book):
        '''将 book 放到缓存区
        '''
        self._book_cache[book_name] = book

    def _split_chapter_into_list(self, chapter_content: str)->list:
        '''将 chapter 根据段落拆分成 list
        '''
        content_list = re.split(r'[\r\n]+', chapter_content.strip())
        return list(map(lambda x: x.strip(), content_list))

    def _reform_book_struct(self, book_dict: dict)->dict:
        '''对 book_dict 格式进行重新整理：

        新格式：
        {
            'info': {'title': xxx, 'author': xxx, 'language': xxx},
            'struct': [{'part_name': xxx,
                        'chapter_names': [{'chapter_name': xxx, 'chapter_index': xxx}, ...]},
                       ...],
            'chapters': [{'chapter_name': xxx, 'chapter_lines': [xxx, xxx, ...]}, ...]
        }
        '''
        new_book_dict = {}
        # 'info' 合成
        new_book_dict['info'] = book_dict['info']
        # 'struct' 和 'chapters' 合成
        new_book_dict['struct'] = []
        new_book_dict['chapters'] = []
        parts = book_dict['content']
        chapter_index = 0
        for part_name, chapter in parts.items():
            chapter_names = []
            for chapter_name, chapter_content in chapter.items():
                chapter_lines = self._split_chapter_into_list(chapter_content)
                chapter = {'chapter_name': chapter_name,
                           'chapter_lines': chapter_lines}
                new_book_dict['chapters'].append(chapter)
                chapter_name = {'chapter_name': chapter_name, 'chapter_index': chapter_index}
                chapter_index += 1
                chapter_names.append(chapter_name)
            part = {'part_name': part_name,
                    'chapter_names': chapter_names}
            new_book_dict['struct'].append(part)
        return new_book_dict

    def _load_book_from_store(self, book_name)->dict:
        '''从 book store 中读取 book
        '''
        book_path = self._book_paths.get(book_name, None)
        book_path = os.path.join(r"./files/data/books",
                                 book_path)
        assert os.path.isfile(book_path),\
            "在 %s 上没有找到图书" % book_path
        with open(book_path, 'rb') as f:
            book_dict = pickle.load(f)
        book_dict = self._reform_book_struct(book_dict)
        return book_dict

    def load_book(self, book_name)->dict:
        '''将 book_name 读到内存中
        '''
        book = self._load_book_from_cache(book_name)
        if book is None:
            book = self._load_book_from_store(book_name)
            self._dump_book_into_cache(book_name, book)
        return book

    @property
    def book_names(self):
        return self._book_names


def main():
    book_loader = BookLoader()
    # book = book_loader.load_book(book_loader.book_names[0])
    # print(book['content'].keys())
    book_dict = book_loader._load_book_from_store(book_loader.book_names[0])
    print(book_dict['struct'])

if __name__ == "__main__":
    main()
