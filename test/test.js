var should = require('should')
    , http = require('http')
    , request = require('supertest')
    , app = require('../app').app;

var PORT = process.env.PORT || 9000
    , IP = process.env.IP || "localhost";

app.listen(PORT, IP, function() {
    console.log("listening on port " + process.env.PORT);
});
request = request(app);

describe("File upload", function() {        
    it ("GET / should return 200", function(done) {
        request.get('/').expect(200, done);
    });
    
    it ("POST /upload with one file should return success", function(done) {
        request
            .post('/upload')
            .attach('userFile', 'test/fixtures/test.txt')
            .end(function(err, res) {
                res.body.should.have.property('success', true);
                done();
            });
    });

    it ("POST /upload with multiple files should fail", function(done) {
        request
            .post('/upload')
            .attach('userFile', 'test/fixtures/test.txt')
            .attach('userFile', 'test/fixtures/test2.txt')
            .end(function(err, res) {
                res.body.should.have.property('success', false);
                done();
            });
    });
});