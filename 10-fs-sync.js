// destruct fs, in order to work with FileSystem. The other way would be to do const fs = require('fs') and then fs.readFileSync
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
let resultSync;
try {
    resultSync = readFileSync('./content/result-sync.txt', 'utf8');
} catch (error) {
    console.log('No such file found!');
}

console.log('first, second, resultSync: ', first, second, resultSync ?? '');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});
