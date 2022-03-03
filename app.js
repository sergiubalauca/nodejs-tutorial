const http = require('http');

// --- OPTION 1 with callback function (req, res)
// const server = http.createServer((req, res) => {
//     console.log('req: ', req);
// });

// server.on('request', (req, res) => {
//     res.end('Welcome');
// })

// --- OPTION 2 with event listener 'on'
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Welcome!');
})

server.listen(8000);
