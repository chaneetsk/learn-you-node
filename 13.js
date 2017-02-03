var http = require('http');
var url = require('url');

var PORT = process.argv[2];

http.createServer(function(req, res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    var time = new Date(urlObj.query.iso);
    var result;
    
    if(pathName === '/api/parsetime') {
        result = getTimeObj(time);
    }
    
    if(pathName === '/api/unixtime') {
        result = getUnixTimestamp(time);
    }
    
    if(result) {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(result));
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(PORT);


function getUnixTimestamp(time) {
  return {
    unixtime: time.getTime()
  };  
}

function getTimeObj(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}