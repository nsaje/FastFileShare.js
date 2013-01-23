var express = require('express');
var fs = require('fs');
var qrcode = require('qrcode');

var app = express();
exports.app = app;

app
	.use(express.bodyParser({uploadDir : __dirname + "/public/u"}))
	.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 9000
    , IP = process.env.IP || "localhost";

app.post('/upload', function (req, res) {
	function die(msg) {
		res.send({success : false, err : msg});
	}

	if (req.files.length < 1 || !req.files.hasOwnProperty("userFile")) {
		die("No files selected!"); return;
	}

    var filePath = req.files.userFile.path,
    	hashName = filePath.substring(filePath.lastIndexOf('/') + 1);
    if (! hashName) die ("Problem uploading file.");

    var fileURL = req.headers.origin + '/u/' + hashName; // is this a safe way to generate links?
    console.log("file url: " + fileURL);

	qrcode.toDataURI(fileURL, function(error, dataURL) {
		if (error) {
			die("Error creating QR code."); return;
		}

		console.log("Qr code created");
		res.send({
			success : true,
			url : fileURL,
			qrData : dataURL
		})
	});
});

app.listen(PORT, IP);
