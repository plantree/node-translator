const https = require("https");
//const parser = require("parser");

// automate detection, translate to Chinese
function auto2zh(text) {
    let url = `https://translate.google.cn/#view=home&op=\
                translate&sl=en&tl=zh-CN&text=${text}`;
    https.get(url, (res) => {
        res.on("data", (d) => {
            console.log(d.toString('utf8'));
        });
    }).on("error", (e) => {
        console.error(e);
    });
}

auto2zh("hello");