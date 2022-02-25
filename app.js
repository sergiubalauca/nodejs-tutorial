const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('req: ', req);

    if(req.url === '/') {
        res.write('Welcome to my home page');
    }

    if(req.url === '/about') {
        res.write('Welcome to the about page');
    }

    res.write(`
        <h1>Oops, not found!</h1>
        <p>Can't find the page</p>
        <a href="/">Go back</a>
    `);
    // res.write('not found');
    res.end();
});

server.listen(8000);
