# -*- coding: utf-8 -*-
'''
导入 books 到 store 中
books 以 xml 为标准格式：

<book>

    <info>
        <title></title>
        <author></author>
        <language></language>
    </info>

    <content>

        <part name="">
            <chapter name="">
            </chapter>
            <chapter name="">
            </chapter>
        </part>
        
        <part name="">
            <chapter name="">
            </chapter>
            <chapter name="">
            </chapter>
        </part>
    </content>

</book>

'''
import os
import re
import pickle
from xml.dom.minidom import parse
import xml.dom.minidom

import click


def _parse_book_xml(book_path)->dict:
    '''解析 xml 内容

    {
        'info': {
            'title': xxx,
            'author': xxx,
            'language': xxx
        },
        'content': {
            'part name 01': {
                'chapter name 01': xxx,
                'chapter name 02': xxx
            },
            'part name 02': {
                'chapter name 03': xxx,
                'chapter name 04': xxx
            }
        }
    }
    '''
    assert os.path.isfile(book_path)
    book = {'info': {}, 'content': {}}
    dom_tree = xml.dom.minidom.parse(book_path)
    collection = dom_tree.documentElement
    info_ele = collection.getElementsByTagName('info')[0]
    content_ele = collection.getElementsByTagName('content')[0]
    def read_element_data(element, name)->str:
        '''读取 element 的内容
        '''
        name_ele = element.getElementsByTagName(name)
        assert name_ele, "没有找到 %s 元素" % name
        return name_ele[0].childNodes[0].data
    # 解析 info
    info = book['info']
    info['title'] = read_element_data(info_ele, 'title')
    info['author'] = read_element_data(info_ele, 'author')
    info['language'] = read_element_data(info_ele, 'language')
    # 解析 content
    parts = content_ele.getElementsByTagName('part')
    # 将 parts 解析成 dict 格式
    part_dict = dict()
    for part in parts:
        # 将 chapters 解析成 dict 格式
        chapters = part.getElementsByTagName('chapter')
        chapter_dict = dict()
        for chapter in chapters:
            chapter_key = chapter.getAttribute('name')
            chapter_value = chapter.childNodes[0].data
            chapter_dict[chapter_key] = chapter_value
        # 存放到 part_dict 中
        part_key = part.getAttribute('name')
        part_value = chapter_dict
        part_dict[part_key] = part_value
    # 保存 parts 到 content
    book['content'] = part_dict
    return book

def _save_to_store(py_obj, save_path):
    '''将 py_obj 保存到 save_path 中
    '''
    with open(save_path, 'wb') as f:
        pickle.dump(py_obj, f)


def main():
    book = _parse_book_xml(r"./books_xml/American Gods.xml")
    _save_to_store(book, r"./books_xml/American Gods.pickle")

if __name__ == "__main__":
    main()
