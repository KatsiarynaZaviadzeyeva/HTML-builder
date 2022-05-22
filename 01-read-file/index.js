const path = require('path');
const fs = require('fs');
const name = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(name, 'utf-8');

stream.on('data', (data) => console.log(data));
stream.on('err', (err) => console.log(err));