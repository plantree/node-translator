#!/usr/bin/env node

'use strict';

const { program } = require("commander");
const readline = require("readline");
const client = require("./client");
const utils = require("./utils");
const define = require("./define");
const parser = require("./parser");

var defaultEngine = "baidu";

// program
program
    .version("0.0.1", "-v, --version");
program
    .option("-i, --interactive", "interactive mode")
    .option("-f, --from [value]", "from language", "en")
    .option("-t, --to [value]", "to languahe", "zh")
    .option("-q, --query <value>", "query text")
    // has default help
program.parse(process.argv);

// interactive
if (program.interactive) {
    let state = "auto";
    utils.printMagenta("(Interactive mode, detect language automatically. <q> to quit.)");    
    process.stdout.write("> ");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("line", (input) => {
        // set destination language
        if (input === "q" || input === "Q") {
            rl.close();
        } else if (input === "set zh") {
            state = "zh";
            utils.printMagenta(`(Interactive mode, translate to ${define.languageMap[state]}. <q> to quit.)`);
            process.stdout.write("> ");
        } else if (input === "set en") {
            state = "en";
            utils.printMagenta(`(Interactive mode, translate to ${define.languageMap[state]}. <q> to quit.)`);
            process.stdout.write("> ");
        } else if (state === "auto") {
            client.detectLanguage(input, (src) => {
                if (src !== "zh") {
                    client.baidu_auto2zh(input, (res) => {
                        utils.printGreen(res);
                        process.stdout.write("> ");
                    });
                } else {
                    client.baidu_auto2en(input, (res) => {
                        utils.printGreen(res);
                        process.stdout.write("> ");
                    });
                }
            });
        } else if (state === "zh") {
            client.baidu_auto2zh(input, (res) => {
                utils.printGreen(res);
                process.stdout.write("> ");
            });
        } else if (state === "en") {
            client.baidu_auto2en(input, (res) => {
                utils.printGreen(res);
                process.stdout.write("> ");
            });
        }
    });
} else if (program.query){
// non-interactive
    let from = program.from.toLowerCase();
    let to = program.to.toLowerCase();
    let query = program.query;
    // only supports en and zh
    if (!utils.checkLanguage(from, to)) {
        console.log("illegal language");
    } else {
        utils.printMagenta(`query: ${program.query}`);
        utils.printCyan(` from: ${define.languageMap[program.from]}\n   to: ${define.languageMap[program.to]}`)
        process.stdout.write("       ");
        if (to === "en") {
            client.baidu_auto2en(query, utils.printGreen);
        } else if (to === "zh") {
            client.baidu_auto2zh(query, utils.printGreen);
        }
    }
} else {
    // auto generate
    console.log(program.helpInformation());
}
