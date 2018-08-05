const http = require('http');
const fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readme.txt', {'encoding':'utf8', 'highWaterMark':64});
var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt', {'encoding':'utf8'});

/* // smart way of doing this
yReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
*/

myReadStream.pipe(myWriteStream);

/*
var server = http.createServer(
  function(req, res) {
    console.log(`request was made: `+req.url)
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hey humans');
  });

server.listen(3000, '127.0.0.1');
console.log('Listening to part 3000');
*/
