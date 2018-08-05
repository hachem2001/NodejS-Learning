const http = require('http');
const fs = require('fs');


/* // smart way of doing this
yReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
*/



var server = http.createServer(
  function(req, res) {
    console.log(`request was made: `+req.url)
    res.writeHead(200, {'Content-type':'text/html'});
    let myReadStream = fs.createReadStream(__dirname+'/index.html', {'encoding':'utf8'});
    myReadStream.pipe(res);
  });

server.listen(3000, '127.0.0.1');
console.log('Listening to part 3000');
