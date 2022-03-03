const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    }
    if (req.url === '/about') {
        // blocking code !!!
        for (let index = 0; index < 1000; index++) {
            for (let index1 = 0; index1 < 1000; index1++) {
                console.log('index, index1: ', index, index1);
            }
        }
        res.end('About page');
    }
    // res('Error page');
});

server.listen(8001, () => {
    console.log('Server is listening');
});
