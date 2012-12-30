var should = require('should')
    , http = require('http')
    , request = require('supertest')
    , app = require('../app').app;

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("listening on port " + process.env.PORT);
});
request = request(app);

describe("File upload", function() {        
    it ("GET / should return 200", function(done) {
        request.get('/').expect(300, done);
    });
    
    it ("POST /upload should return json", function(done) {
        var desiredJSON = { 
            "success" : "true"
        };
        request.post('/upload').expect(JSON.stringify(desiredJSON), done);
    });
});