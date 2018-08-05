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
    res.writeHead(200, {'Content-type':'application/json'});
    var myObj = {
      name: 'Ryu',
      job: 'Ninja',
      age : 29
    }
    res.end(JSON.stringify(myObj))
  });

server.listen(3000, '127.0.0.1');
console.log('Listening to part 3000');
