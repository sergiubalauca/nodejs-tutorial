console.log('first');

// because setTimeout is async, it gets offloaded - gets to the back of the line
setTimeout(() => {
    console.log('second');
}, 0);

console.log('third');
