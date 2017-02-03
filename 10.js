var net = require('net');
var PORT = process.argv[2];
var server = net.createServer(listener).listen(PORT);

function listener(socket) {
    socket.end(getDate() + '\n');
}

function getDate() {
    var date = new Date();
    return date.getFullYear()+'-'+formatNum(date.getMonth()+1)+'-'+formatNum(date.getDate())
    +' '+formatNum(date.getHours())+':'+formatNum(date.getMinutes());
}

function formatNum(num) {
    return num<10? "0"+num : num;
}
