import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

//basename() --> last portion of a path
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname()---> for getting the extension of the required file
console.log(path.extname(filePath))

//parse()
console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`this has the file name ${__filename} \n this does not have the file name ${__dirname}`)

//join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2)

//resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3)