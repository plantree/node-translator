'use strict';

const cryto = require("crypto");
const parser = require("./parser");
const define = require("./define");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function md5(data) {
    return cryto.createHash("md5").update(data).digest("hex");
}

function getJSON(res, callback) {
    const { statusCode } = res;
    let error;
    if (statusCode !== 200) {
        error = new Error("Failed\n" + `StatusCode: ${statusCode}`);
    }
    if (error) {
        console.error(error.message);
        res.resume();
        return;
    }
    res.setEncoding("utf8");
    let rawData = "";
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            const parseRes = parser.parseBaiduRes(parsedData);
            if (parseRes !== '') {
                callback(parseRes);
            }
        } catch (e) {
            console.error(e.message);
        }
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
}

// check wether the language is legal
function checkLanguage(from, to) {
    from = from.toLowerCase();
    to = to.toLowerCase();
    if (define.supportLanguage.indexOf(from) !== -1 &&
        define.supportLanguage.indexOf(to) !== -1) {
        return true;
    } else {
        return false;
    }
}

function printGreen(text) {
    console.log("\x1B[32m%s\x1B[0m", text);
}

function printCyan(text) {
    console.log("\x1B[36m%s\x1B[0m", text);
}

module.exports = {
    "getRandomInt": getRandomInt,
    "md5": md5,
    "getJSON": getJSON,
    "checkLanguage": checkLanguage,
    "printGreen": printGreen,
    "printCyan": printCyan,
}