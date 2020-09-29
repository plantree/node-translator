'use strict';

const http = require("http");
const utils = require("./utils");
//const parser = require("parser");

const baiduAppId = "20200927000574240";
const baiduKey = "BgiDzsIc8fpM5bjNRbxg";

/**-------------baidu------------ */
function generateBaiduSign(appid, query, salt, key) {
    let str = appid + query + salt + key;
    return utils.md5(str);
}

// automate detection, translate to Chinese
async function baidu_auto2zh(query) {
    let url = 'http://api.fanyi.baidu.com/api/trans/vip/translate?'
    url += `q=${query}&`;
    url += `from=auto&to=zh&`;
    url += `appid=${baiduAppId}&`;
    let salt = utils.getRandomInt(10000);
    url += `salt=${salt}&`;
    let sign = generateBaiduSign(baiduAppId, query, salt, baiduKey);
    url += `sign=${sign}`;

    http.get(url, (res) => {
        
    });
}

baidu_auto2zh("hello");