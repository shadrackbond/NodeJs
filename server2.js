import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [
    { id: 1, name: 'Shaddbond' },
    { id: 2, name: 'Shamak' },
    { id: 3, name: 'hola Doe' }
]

//logger middelware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next();
}

//JSON middleware
const jsonMiddleWare = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

//Route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

//Route handler for GET /api/users/:id

const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
        res.write(JSON.stringify(user))
    }
    else {
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'User not found' }))
    }
    res.end()
};

//Route handler for POST /api/users
const createUserHandler = (req, res) => {

    let body = '';
    //listen for data

    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

//Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({ message: 'Route not found' }))
    res.end()
}

//the server itself
const server = createServer((req, res) => {
    logger(req, res, () => {
        //check the commented below code for the original code in the place
        jsonMiddleWare(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUserHandler(req, res);
            }
            else if (req.url.match(/\/api\/users\/([0-9])/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            }
            else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            }
            else {
                notFoundHandler(req, res);
            }
        })
    });

});

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})


// this is the original code in the  server

// if (req.url === '/api/users' && req.method === 'GET') {
//     res.write(JSON.stringify(users))
//     res.end()
// }
// else if (req.url.match(/\/api\/users\/([0-9])/) && req.method === 'GET') {
//     const id = req.url.split('/')[3];
//     const user = users.find((user) => user.id === parseInt(id));
//     res.setHeader('Content-Type', 'application/json');

//     if (user) {
//         res.write(JSON.stringify(user))
//     }
//     else {
//         res.statusCode = 404
//         res.write(JSON.stringify({ message: 'User not found' }))
//     }
//     res.end()


// }
// else {
//     res.setHeader('Content-Type', 'application/json')
//     res.statusCode = 404
//     res.write(JSON.stringify({ message: 'Route not found' }))
//     res.end()
// }