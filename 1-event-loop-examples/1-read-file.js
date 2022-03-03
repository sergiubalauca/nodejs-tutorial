const readFile = require('fs').readFile;

// because it is an async operation, it will get 'offloaded'. Code continues and readFile will only
// be registered in the event loop
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('err1: ', err);
        return;
    }

    console.log('Read file result: ', result);
    console.log('completed first task');
});

console.log('completed second task');
console.log('completed third task');
console.log('completed 4th task');
console.log('completed 5th task');
