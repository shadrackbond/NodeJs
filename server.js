import http from 'http';
import fs from 'fs/promises'
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    try {

        if (req.method === 'GET') {
            //creating a router
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(`<h1>Home Page</h1>`);
                res.end("\nWe can put something here to be displayed too");
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About Page</h1>')
            } else {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.end('<h1>Page not found</h1>')
            }


        } else {
            throw new Error('Method not allowed');
        }

    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('Server Error')
    }



});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})