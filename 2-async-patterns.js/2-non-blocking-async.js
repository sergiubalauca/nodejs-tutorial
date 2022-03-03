const { readFile, writeFile } = require('fs');
// const { readFile, writeFile } = require('fs').promises; -- other way of making sure we return promises on read/writeFile

// from util we can use .promisify to make readFile directyly returning a promise, instead of
// returning new Promise((resolve, reject) => {...})
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            if (data) {
                resolve(data);
            }
        });
    })
}

// getText('./content/first.txt')
//     .then((res) => console.log('res: ', res))
//     .catch((err) => console.log('err: ', err))

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt', `This is await concat: ${first} - ${second}`, {flag: 'a'})
        console.log(first, second);
    } catch (error) {
        console.log('Err: ', error);
    }
}

start();
