const url = "http://localhost:3000/api/cards";

(async () => {
    const chai = await import('chai');
    const request = require("request");
    const expect = chai.expect;

    describe("GET api/cards", function() {
        it("returns status 200 to check if api works", function(done) {
            request(url, function(error, response, body) {
                console.log(body); // Log the response body
                expect(response.statusCode).to.be.equal(200);
                done();
            });
        });

        it("Returns the expected data structure", function(done) {
            request(url, function(error, response, body) {
                console.log(body); // Log the response body
                const responseData = JSON.parse(body);
                expect(responseData.success).to.be.true;
                expect(responseData.data).to.be.an('array');
                expect(responseData.data).to.have.lengthOf.at.least(1); // Ensure there is at least one bird object
                expect(responseData.data[0]).to.have.property('_id');
                expect(responseData.data[0]).to.have.property('title');
                expect(responseData.data[0]).to.have.property('image');
                expect(responseData.data[0]).to.have.property('link');
                expect(responseData.data[0]).to.have.property('description');
                done();
            });
        });
    });
})();


