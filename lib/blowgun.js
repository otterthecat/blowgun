var Transform = require('stream').Transform;
var engine;

var streamHandler = function (dataObj) {
  'use strict';

  return function (data, encoding, callback) {
    var doRender = engine.compile(data);
    callback(null, doRender(dataObj));
  };
};

module.exports = function () {
  'use strict';

  return function (model) {
    Transform.prototype._transform = streamHandler(model);
    return new Transform({
      'decodeStrings': false
    });
  };
};
