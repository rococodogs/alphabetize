#!/usr/local/bin/node

var alph = require('./alphabetize');
var str  = '';

if ( process.argv.length === 3 ) {
    var fs = require('fs');

    fs.readFile(process.argv[2], function(err, data) {
        if ( err ) { throw Error(err); }
        else {
            console.log(alph(data.toString()));
            process.exit();
        }
    });   
} else {
    // isTTY solution from http://stackoverflow.com/a/15485424
    if ( !process.stdin.isTTY ) {
        process.stdin.on('readable', function() {
            var chunk = process.stdin.read();
            if ( chunk ) {
                str += chunk.toString();
            }
        });

        process.stdin.on('end', function() {
            if ( str !== '' ) {
                console.log(alph(str));
                process.exit();
            }
        });
    } else {
        usage();
        process.exit();
    }
}

function usage() {
    console.log('Usage: alphabetize <file>');
    console.log('       alphabetizes a file to stdout ');
    console.log('-or- ');
    console.log('       pipe a string into alphabetize');
}