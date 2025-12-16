import fs from 'fs/promises'

//readFile() - Promise .then()
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//readFile() - async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this File');
        console.log('File written to.....');
    }
    catch (error) {
        console.log(error);
    }
};

//appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is the new added sentence');
        console.log('File appended to.....');
    }
    catch (error) {
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();