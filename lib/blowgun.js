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

  var transform = new Transform({
    'decodeStrings': false
  });
  /*eslint-disable*/
  transform._transform = streamHandler(model);
  /*eslint-enable*/
  return transform;
};

module.exports = function (templateEngine) {
  'use strict';

  engine = templateEngine;
  return generateTransform;
};
