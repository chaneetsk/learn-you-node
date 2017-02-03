var fs = require('fs');

module.exports = function (dirName, extName, callback) {
    fs.readdir(dirName,function(err,data){
        if(err)
            return callback(err);
           
        var regex = new RegExp('\.' + extName + '$');
        var filtered = data.filter(function(elem){
            return regex.test(elem);
        });
        
        callback(null,filtered);
    });
}