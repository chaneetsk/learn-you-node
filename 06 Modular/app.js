var mod = require('./mod.js');

var callback = function(err,data) {
    if(err)
        throw err;
    data.forEach(function(elem){
        console.log(elem);
    });
}

mod(process.argv[2],process.argv[3],callback);