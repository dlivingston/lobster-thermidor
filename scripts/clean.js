'use strict';
console.log('Cleanup Script');

var rimraf = require('rimraf');

rimraf('www', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});