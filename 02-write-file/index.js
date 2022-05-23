const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'), 'utf8');

const typeText = readline.createInterface(process.stdin);
console.log('Hello! How are you?');
process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
});
process.stdin.on('err', (e) => {
    console.log('Error:' + e);
});
process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
});
process.on('exit', () => {
    typeText.close();
    writableStream.destroy();
    console.log('See you later!');
});
typeText.on('line', (text) => {
    if (text === 'exit') {
        process.exit();
    }
});
process.on('SIGINT', () => {
    process.exit();
});