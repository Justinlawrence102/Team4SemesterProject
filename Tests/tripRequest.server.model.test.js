var should = require('should'), 
    mongoose = require('mongoose'), 
    TripRequest = require('../server/models/tripRequest.server.model'),
    config = require('../server/config/config');

var tripRequest, id;

tripRequest =  {
  userName: "usertest4-2-19",
  origin: "Gainesville",
  budget: "2000",
numPeole: "3",
  notes: "these are my trip's notes"
}

describe('tripRequest Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri);
    done();
  });

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when userName is given', function(done){
      new TripRequest({
        userName: tripRequest.userName
      }).save(function(err, tripRequest){
        should.not.exist(err);
        userName = tripRequest.userName;
        done();
      });
    });

    it('throws an error when userName not provided', function(done){
      new TripRequest({ }).save(function(err){
        should.exist(err);
        done();
      })
    });

  });
});
