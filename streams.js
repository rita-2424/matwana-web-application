const fs = require('fs');
//reads blog 3
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
//writes contents of blog 3 to blog 4 .it creates blog 4 before writing content.
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//readStream.on('data', (chunk) => {
//console.log('----NEW CHUNK----');
//console.log(chunk);
//writeStream.write('\nNEW CHUNK\n');
//writeStream.write(chunk);
//});

//piping
//written all of the content to blog 4
readStream.pipe(writeStream);