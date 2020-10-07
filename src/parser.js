'use strict';

function parseBaiduRes(data) {
    if (data.hasOwnProperty("error_code")) {
        console.error(`ErrorCode: ${data['error_code']}`);
        return '';
    } else {
        return data['trans_result'][0]['dst'];
    }
}

module.exports = {
    "parseBaiduRes": parseBaiduRes,
}