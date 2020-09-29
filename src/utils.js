'use strict';

const cryto = require("crypto");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function md5(data) {
    return cryto.createHash("md5").update(data).digest("hex");
}

module.exports = {
    "getRandomInt": getRandomInt,
    "md5": md5,
}