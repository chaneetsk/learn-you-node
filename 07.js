var http = require('http');
http.get(process.argv[2],function(resp){
    resp.setEncoding('utf8');
    resp.on("data",function(data){
        console.log(data.toString());
    });
    resp.on('error',function(err){throw err});
}).on('error',function(err){throw err});
