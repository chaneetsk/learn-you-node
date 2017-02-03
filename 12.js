var http = require('http');
var map = require('through2-map');
var PORT = process.argv[2];

http.createServer(function(req, res){
    if(req.method === 'POST') {
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        
    }
}).listen(PORT);