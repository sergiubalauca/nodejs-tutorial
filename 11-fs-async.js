// destruct fs, in order to work with FileSystem. The other way would be to do const fs = require('fs') and then fs.readFileSync
const { readFile, writeFile } = require('fs');
// For the async ones we are goind to use callbacks which basically say that those methos are going to be run when we are done

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('err1: ', err);
        return;
    }

    console.log('Read file result: ', result);

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('err2: ', err);
            return;
        }

        const second = result;

        writeFile('./content/result-async.txt',
            `Here is the async result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log('err while writing async: ', err);
                    return;
                }

                console.log('finished writing async');
            })
    })
})
