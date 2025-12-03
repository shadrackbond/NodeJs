import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

const __filname = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

console.log(`this is the filepath ${__filname} and this is the dirpath ${__dirname}`)

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    try {

        if (req.method === 'GET') {
            let filepath;
            req.u
            //creating a router
            if (req.url === '/') {
                filepath = path.join(__dirname, 'public', 'index.html')
                // res.writeHead(200, { 'Content-Type': 'text/html' })
                // res.write(`<h1>Home Page</h1>`);
                // res.end("\nWe can put something here to be displayed too");
            } else if (req.url === '/about') {
                filepath = path.join(__dirname, 'public', 'about.html')
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>About Page</h1>')
            } else {
                throw new Error('404 PAGE NOT FOUND')
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end()
        } else {
            throw new Error('Method not allowed');
        }

    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('Server Error')
    }



});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})