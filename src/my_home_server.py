# -*- coding: utf-8 -*-
import os
import logging
from logging.handlers import RotatingFileHandler
import random
import json

from tornado import gen
import tornado.ioloop
import tornado.web
from tornado.options import define, options, parse_config_file
from tornado.escape import json_encode, json_decode
from tornado.util import ObjectDict

import tools


# 软件信息
SOFT_VERSION = "0.2.3"

# cookie 过期时间，会根据登陆者不同而做调整，单位 天
cookie_expires = 1


class BaseHandler(tornado.web.RequestHandler):

    def get_current_user(self):
        '''获取当前 user id
        '''
        return self.get_secure_cookie("user_id", max_age_days=cookie_expires)

    @gen.coroutine
    def get(self, *args):
        '''默认页面
        '''
        self.write_error(404)

    def write_stream(self, data_bytes):
        '''发送 stream 方法

        data_bytes: bytes to send
        '''
        self.set_header('Content-Type', 'application/octet-stream')
        self.write(data_bytes)

    def write_json(self, py_obj):
        '''发送 json 方法

        py_obj: object of python
        '''
        self.set_header("Content-Type", "application/json; charset=UTF-8")
        self.write(json_encode(py_obj))

    @gen.coroutine
    def write_error(self, status_code, **kwargs):
        '''write_error 方法重载

        400: 请求连接错误
        401: 未授权错误
        403: 禁止访问错误
        404: 找不到网页错误
        500: 服务器内部错误
        '''
        if status_code == 400:
            self.write('400')
        elif status_code == 401:
            self.write('401')
        elif status_code == 403:
            self.write('403')
        elif status_code == 404:
            self.write('404')
        elif status_code == '500':
            self.write('500')
        else:
            self.write('400')

    @gen.coroutine
    def prepare(self):
        '''预处理

        1. 接收到带有 param 关键字的参数，解析为 json 后，存放在 param_args 中；
        2. 接收到带有 data 关键字的参数，不解析，直接存放在 data_raw 中，该方式只用在文件上传中 ；
        '''
        # 1. 解析 param 参数
        param_raw = self.get_argument('param', None)
        self.param_args = json_decode(param_raw) if param_raw else None
        # 2. 解析 data 参数
        self.data_raw = self.request.files['data'][0]['body'] if 'data' in self.request.files else None


class IndexPageHandler(BaseHandler):
    '''index 主网页
    '''

    @gen.coroutine
    def get(self):
        '''get 方法
        '''
        self.render("index.html", user_name=self.current_user, soft_version=SOFT_VERSION)


book_loader = tools.BookLoader()
class BooksPageHandler(BaseHandler):
    '''books 主网页
    '''

    @gen.coroutine
    def get(self, *args):
        '''get 方法
        '''
        command = args[0] if args else None
        try:
            # 读取主页面
            if command is None:
                self.render("books.html")
            # 读取书目录
            elif command == "read_book_names":
                rst = {"book_names": book_loader.book_names}
                self.write_json(rst)
            # 读取书内容
            elif command == "load_book":
                book_name = self.param_args.get("book_name", None)
                if book_name is None:
                    raise RuntimeError("获取书名参数失败")
                book = book_loader.load_book(book_name)
                if book is None:
                    raise RuntimeError("获取《%s》内容失败" % book_name)
                rst = book
                self.write_json(rst)
            else:
                self.write_error(400)
        except RuntimeError as err:
            self.write_error(500)



define("port", default="8888", type=int,
       help="port of service connecting, default is 8888")
define("debug", default=True, type=bool)

def make_server():
    static_path = os.path.join(r'./', "files", "static")
    template_path = os.path.join(r'./', "files", "templates")
    settings = {
        "static_path": static_path,
        "template_path": template_path,
        "debug": True,
        "cookie_secret": b' \xa0\x076\xa5#\x11\xe7\x85\x93\xe2=\xf0\x00\x0b\x90',
        "login_url": "/sign",
    }
    return tornado.web.Application([
        (r"/", IndexPageHandler),
        (r"/books", BooksPageHandler),
        (r"/books/(.*)", BooksPageHandler),
        #(r"/sign", SignPageHandler),
        #(r"/sign/(.*)", SignPageHandler),
        (r"/.*", BaseHandler),
        #(r"/.*", tornado.web.RedirectHandler, dict(url=r"monitor.html", permanent=False)),
    ],
    **settings)

# logging 设置
class LoggerFilter(logging.Filter):
    def __init__(self):
        pass
    def filter(self, record):
        # if record.module != "comm_coroutine_tools":
            # return True
        # else:
            # return False
        return False
def set_logger():
    logger = logging.getLogger()
    #logger.setLevel(logging.CRITICAL)
    #logger.setLevel(logging.WARNING)
    logger.setLevel(logging.INFO)
    #logger.setLevel(logging.DEBUG)
    # clear handlers
    handlers = logger.handlers
    for handler in handlers:
        logger.removeHandler(handler)
    # add filter
    logger_filter = LoggerFilter()
    logger.addFilter(logger_filter)
    # add stream handler
    console = logging.StreamHandler()
    console.setLevel(logging.DEBUG)
    formatter = logging.Formatter('[%(levelname)s %(asctime)s] [%(module)s %(lineno)d] %(message)s')
    console.setFormatter(formatter)
    logger.addHandler(console)
    # add txt log
    # rt_handler = RotatingFileHandler(r"log.txt", maxBytes=1*1024*1024, backupCount=5)
    # rt_handler.setLevel(logging.WARNING)
    # rt_handler.setFormatter(formatter)
    # logger.addHandler(rt_handler)
    # set progate
    logger.propagate = False

def main():
    # tornado 设置
    config_path = os.path.join(r'./', "server.conf")
    parse_config_file(config_path)
    port = options.port
    set_logger()
    server = make_server()
    for i in range(10):  # try 10 times of porting setting
        try:
            server.listen(port)
            break
        except:
            logging.warning('port {} is occupied, change to another port.'.format(port))
            port = random.randint(1000, 9999)
            if i == 9:
                logging.critical("re-setting port 10 times, all is occupied.")
                return None
    logging.info(r"Starting @ http://127.0.0.1:{}".format(port))
    # 开启 main eventloop
    try:
        tornado.ioloop.IOLoop.current().start()
    except KeyboardInterrupt:
        pass
    except:
        pass


if __name__ == "__main__":
    main()

