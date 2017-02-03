var http = require('http');
var concatStream = require('concat-stream');

var urls = process.argv.slice(2);
var result = [], count = 0;

urls.forEach(function(url,i){
    http.get(url,function(response){
        response.setEncoding('utf8');
        response.on('error',function(err){ throw err; });
        response.pipe(concatStream(function(data) {
            result[i] = data;
            count++;
            
            if(urls.length === count) {
                result.forEach(function(data){
                    console.log(data);
                });
            }
        }));
        
    });
    
});
