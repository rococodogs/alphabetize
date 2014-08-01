#!/usr/local/bin/node

var alph = require('./');
var str  = '';

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if ( chunk !== null ) {
        str += chunk.toString();
    }
});

process.stdin.on('end', function() {
    console.log(alph(str));
    process.exit();
});

if ( process.argv.length === 3 ) {
    var fs = require('fs');

    fs.readFile(process.argv[2], function(err, data) {
        if ( err ) { throw Error(err); }
        else {
            console.log(alph(data.toString()));
            process.exit();
        }
    });
}