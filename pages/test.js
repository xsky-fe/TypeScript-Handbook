'use strict';

const fs = require('fs');
const list = fs.readdirSync('.');

for (let i = 0; i < list.length; i++) {
    const file = list[i];
    process(file)
}

function process(file) {
    if (!file.endsWith('.md')) return;
    const lines = fs.readFileSync(file, 'utf8').split("\n").filter((line, index) => index === 0 || (line.startsWith('#') && !line.startsWith('#####'))).join("\n")
    fs.writeFileSync(file, lines)
}
