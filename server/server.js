var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('欢迎来到蛤蟆呱\n');
}).listen(1337, '47.88.13.171');
console.log('Server running at http://127.0.0.1:1337/');
