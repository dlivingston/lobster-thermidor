'use strict';


console.log("This is the Build Script");

var mkdirp = require('mkdirp');

mkdirp('www', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});