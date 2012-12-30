var express = require('express');

var app = express();
exports.app = app;

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP);

//var connect = require('connect')
//    , http = require('http');
//
//var app = connect()
//    .use(connect.logger('dev'))
//    .use(connect.static('public'))
//    .use(function(req, res) {
//        res.end('hello world');
//    });
//
//exports.app = app;
//
//
//http.createServer(app).listen(process.env.PORT, process.env.IP);

//var paths = {
//    '/' : function(req, res) {
//        console.log("Serving index page");
//        fs.readFile('index.html', function(error, content) {
//            if (error) {
//                res.writeHead(500);
//                res.end();
//            } else {
//                res.writeHead(200, { 'Content-Type': 'text/html' });
//                res.end(content, 'utf-8');
//            }
//        });
//    }
//};
//
//var server = http.createServer(function(req, res) {
//    if (req.url in paths) {
//        paths[req.url].apply(this, [req, res]);
//    } else {
//        res.writeHead(404);
//        res.end();
//    }
//});
//server.listen(process.env.PORT, process.env.IP);