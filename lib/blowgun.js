var Transform = require('stream').Transform;
var engine;

var streamHandler = function (dataObj) {
  'use strict';

  return function (data, encoding, callback) {
    var doRender = engine.compile(data);
    callback(null, doRender(dataObj));
  };
};

var generateTransform = function (model) {
  'use strict';

  Transform.prototype._transform = streamHandler(model);
  return new Transform({
    'decodeStrings': false
  });
};

module.exports = function (templateEngine) {
  'use strict';

  engine = templateEngine;
  return generateTransform;
};
