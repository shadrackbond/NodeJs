import fs from 'fs';

//readfile() - callback

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// readFileSync() - synchronous version

const data = fs.readFileSync('./test.txt', 'utf-8');
console.log(data)
