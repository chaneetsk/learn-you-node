var fs = require('fs');
var path = require('path');

var regex = new RegExp('\.' + process.argv[3] + '$');
//var regex = /\.txt$/;
 
fs.readdir(process.argv[2],callback);

function callback(err,list) {
    if(err)
        throw err;
    
    list.filter(function(elem){
        return regex.test(elem);
    }).forEach(function(elem){
        console.log(elem);
    });
    
}