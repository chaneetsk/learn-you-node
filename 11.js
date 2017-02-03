var http = require('http');
var fs = require('fs');

var PORT = process.argv[2];
var file = process.argv[3];

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type' : 'txt/plain' });
    fs.createReadStream(file).pipe(res); 
    
}).listen(PORT);