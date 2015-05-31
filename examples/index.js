/*
  EXAMPLE ONLY
  required files (templates, ejs, etc)
  are not included in this directory.
*/

var fs = require('fs');

// we're requiring the template engine "ejs" below.
// However, if you prefer Jade or Handlebars,
// you may use either of those as well.
var template = require('ejs');

// require blowgun and pass it the
// template engine on creation
var blowgun = require('blowgun')(template);

// data model to be passed to the template
var data = {
  "motto": 'The North remembers!'
};

// Create your streams.
// In this case, we're going to read from an HTML template
// and render it to index.html
var read = fs.createReadStream('template.html', {
  "encoding": 'utf8'
});

var write = fs.creatreWriteStream('index.html');

// pipe your stream to blowgun
// and call it with your data model
read
  .pipe(blowgun(data))
  .pipe(write);