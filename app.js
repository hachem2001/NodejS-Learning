const http = require('http');
const fs = require('fs');

var server = http.createServer(
  function(req, res) {
    console.log(`request was made: `+req.url);
    if(req.url === '/home' || req.url === '/'){
      res.writeHead(200, {'Content-type':'text/html'});
      fs.createReadStream(__dirname+'/index.html').pipe(res);
    } else if (req.url === '/contact') {
      res.writeHead(200, {'Content-type':'text/html'});
      fs.createReadStream(__dirname+'/contact.html').pipe(res);
    } else if (req.url === '/api/ninjas') {
      var ninjas = [{name: 'ryu', age:29}, {name:'riyoshi', age:32}];
      res.writeHead(200, {'Content-type':'application/json'});
      res.end(JSON.stringify(ninjas));
    } else {
      res.writeHead(404, {'Content-type':'text/html'});
      fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
  });

server.listen(8080, '127.0.0.1');
console.log('Listening to part 8000');
