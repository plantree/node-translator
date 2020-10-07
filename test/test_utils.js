'use strict';

const assert = require("assert");
const utils = require("../src/utils");

describe("#utils.js", () => {
    describe("#md5()", () => {
        it ("md5(hello) should return 5d41402abc4b2a76b9719d911017c592", () => {
            assert.strictEqual(utils.md5("hello"), "5d41402abc4b2a76b9719d911017c592");
        });

        it ("md5(world) should return 7d793037a0760186574b0282f2f435e7", () => {
            assert.strictEqual(utils.md5("world"), "7d793037a0760186574b0282f2f435e7");
        });
    });
});