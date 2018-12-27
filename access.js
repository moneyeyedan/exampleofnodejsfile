var add = require('./addition')
var fs = require('fs');
fs.appendFile('file.txt', 'data to append','utf8', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
var result=add.add(10,20);
console.log(result,add.c);
fs.open('file.txt', 'a', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, 'data is change the path', 'utf8', (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });