# node-translator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![CI](https://github.com/plantree/node-translator/workflows/CI/badge.svg)

A CLI translator based on the API from public area and Node.js.

### Features

- Interactive mode, auto language detection
- Simple spelling correction
- Based on the API from Baidu Translate (currently)
- Only support English and Chinese (currently)

### Install

```bash
npm install node-translator
```

### Usage

There are two modes while using this translator.

- CLI

  ```bash
  Usage: app [options]
  
  Options:
    -v, --version        output the version number
    -i, --interactive    interactive mode
    -f, --from [value]   from language (default: "en")
    -t, --to [value]     to languahe (default: "zh")
    -q, --query <value>  query text
    -h, --help           display help for command
  ```

  

- Interactive

  

### Reference
1. [https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html](https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
2. [https://blog.csdn.net/guang_s/article/details/90380581](https://blog.csdn.net/guang_s/article/details/90380581)

### License

MIT @[plantree](https://plantree.me)
