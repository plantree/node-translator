# node-translator
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) ![CI](https://github.com/plantree/node-translator/workflows/CI/badge.svg) ![Travis](https://www.travis-ci.org/plantree/node-translator.svg?branch=master)![npm downloads](https://img.shields.io/npm/dm/translator-me.svg)

A CLI translator based on the API from public areas and Node.js.

### Features

- Interactive mode, auto language detection
- Simple spelling correction
- Based on the API from Baidu Translate (currently)
- Only support English and Chinese (currently)

### Install

```bash
npm install -g translator-me
```

### Usage

There are two modes while using this translator.

- CLI

  ```bash
  Usage: translator-me [options]
  
  Options:
    -v, --version        output the version number
    -i, --interactive    interactive mode
    -f, --from [value]   from language (default: "en")
    -t, --to [value]     to language (default: "zh")
    -q, --query <value>  query text
    -h, --help           display help for command
  ```

- Interactive

  Interactive mode supports setting different destination language, and the source language is been automatically detected.

  - `set en`, means the destination language is English
  - `set zh`, means the destination language is Chinese
  - `set auto`, means that if the source language is English, the destination language will be Chinese, and vice versa.
  - `q`, means quit.

#### Demo

<img src="https://img.plantree.me/image-20201019112211780.png" style="zoom:50%;" />

### Reference
1. [https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html](https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
2. [https://blog.csdn.net/guang_s/article/details/90380581](https://blog.csdn.net/guang_s/article/details/90380581)
3. https://zhuanlan.zhihu.com/p/37316872
4. https://juejin.im/post/6844903709101522951

### License

MIT @[plantree](https://plantree.me)

