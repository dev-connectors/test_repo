var fs = require('fs');
var path = require('path');

var arg1_dir = process.argv[2];
var arg2_ext = process.argv[3];

var a = fs.readdir(arg1_dir, function callback(err, list) {
  if (err) {
    console.log(err);
  }

  list.filter(function (file) {
    return path.extname(file) == '.'+arg2_ext;
  }).forEach(function(file) {
    console.log(file);
  });
});
