// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

// modules to test
// /////////////////////////////////////////////////////////
var blowgun = require('../../index');
var Transform = require('stream').Transform;

describe('blowgun', function () {
    'use strict';

    it('should be a function', function(){
      blowgun.should.be.a('function');
    });

    it('should return a function when called', function(){
      var returnValue = blowgun({});
      returnValue.should.be.a('function');
    });

    describe('returned function from call', function(){

      it('should be an instance of Transform', function(){
        var returnValue = blowgun({});
        var transformInstance = returnValue({});
        transformInstance.should.be.an.instanceOf(Transform);
      });
    });
});
