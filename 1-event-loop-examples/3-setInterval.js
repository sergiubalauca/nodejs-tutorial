console.log('first');

// because setInterval is async, it gets offloaded - gets to the back of the line
setInterval(() => {
    console.log('second');
}, 2000);

console.log('third');
