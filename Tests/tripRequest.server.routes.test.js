var should = require('should'), 
    request = require('supertest'), 
    express = require('../server/config/express'),
    Listing = require('../server/models/tripRequest.server.model');

/* Global variables */
var app, agent, listing, id;

/* Unit tests for testing server side routes for the listings API */
describe('TripRequest CRUD tests', function() {

  this.timeout(10000);

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

         it('should it able to retrieve all trip requests for user userTest4-2-19', function(done) {
    agent.get('/api/requests?userName=usertest4-2-19')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });

  it('should be able to save a listing', function(done) {
     var tripRequest =  {
     userName: "usertest4-2-19",
     origin: "Gainesville",
     budget: "2000",
     numPeole: "3",
     notes: "these are my trip's notes"
     };

    agent.post('/api/requests')
      .send(tripRequest)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        res.body.userName.should.equal("usertest4-2-19");
        res.body.origin.should.equal("Gainesville");
        res.body.budget.should.equal("2000");
        done();
      });
  });

});
