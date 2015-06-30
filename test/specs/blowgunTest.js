// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

// modules to test
// /////////////////////////////////////////////////////////
var blowgun = require('../../lib/blowgun');

describe('blowgun', function () {
    'use strict';

    it('should be a function', function(){
      blowgun.should.be.a('function');
    });

    it('should return a function when called', function(){
      var returnValue = blowgun({});
      returnValue.should.be.a('function');
    });
});
