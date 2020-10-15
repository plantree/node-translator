'use strict';

function parseBaiduTranslateRes(data) {
    if (data.hasOwnProperty("error_code")) {
        // console.error(`ErrorCode: ${data['error_code']}`);
        return `${data['error_msg']}. Please retry.`;
    } else {
        return data['trans_result'][0]['dst'];
    }
}

function parseDetectLanguageRes(data) {
    if (data.hasOwnProperty("error_code")) {
        if (data["error_code"] !== 0) {
            // console.error(`ErrorCode: ${data['error_code']}, ErrorMsg: ${data['error_msg']}`);
            return `${data['error_msg']}. Please retry.`;
        } else {
            return data['data']['src'];
        }
    } else {
        return 'Please retry.';
    }
}

module.exports = {
    "parseBaiduTranslateRes": parseBaiduTranslateRes,
    "parseDetectLanguageRes": parseDetectLanguageRes,
}