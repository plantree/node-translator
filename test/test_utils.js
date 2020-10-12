'use strict';

const assert = require("assert");
const utils = require("../src/utils");

describe("utils.js", () => {
    describe("#md5()", () => {
        it ("md5(hello) should return 5d41402abc4b2a76b9719d911017c592", () => {
            assert.strictEqual(utils.md5("hello"), "5d41402abc4b2a76b9719d911017c592");
        });

        it ("md5(world) should return 7d793037a0760186574b0282f2f435e7", () => {
            assert.strictEqual(utils.md5("world"), "7d793037a0760186574b0282f2f435e7");
        });
    });

    describe("#checkLanguage", () => {
        it ("checkLanguage(zh, en) should return true", () => {
            assert.strictEqual(utils.checkLanguage("zh", "en"), true);
        });
        it ("checkLanguage(en, zh) should return true", () => {
            assert.strictEqual(utils.checkLanguage("en", "zh"), true);
        });
        it ("checkLanguage(zh, ef) should return false", () => {
            assert.strictEqual(utils.checkLanguage("zh", "ef"), false);
        });
        it ("checkLanguage(ZH, en) should return true", () => {
            assert.strictEqual(utils.checkLanguage("ZH", "en"), true);
        });
    });
});