'use strict';

const { program } = require("commander");
const client = require("./client");
const utils = require("./utils");
const define = require("./define");

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

} else {
// non-interactive
    let from = program.from;
    let to = program.to;
    let query = program.query;
    // only supports en and zh
    if (!utils.checkLanguage(from, to)) {
        console.log("illegal language");
    } else {
        utils.printCyan(`query: ${program.query}\n from: ${define.languageMap[program.from]}\n   to: ${define.languageMap[program.to]}`);
        process.stdout.write("\t");
        if (to === "en") {
            client.baidu_auto2en(query, utils.printGreen);
        } else if (to === "zh") {
            client.baidu_auto2zh(query, utils.printGreen);
        }
    }
}
