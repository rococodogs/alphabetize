if ( typeof module !== 'undefined' ) {
    module.exports = alphabetize;
}

function alphabetize(str) {
    return str
    .replace(/\s{2,}/g, ' ')
    .replace(/[\t\-\?\!\@\#\$\%\^\&\*\(\)\,\.\{\}\[\}\"\:\;\~\`\<\>\+\=\\\|0-9]+/g, '')
    .split(/\s/)
    .sort(function(a,b){
        var aye = a.toLowerCase()
          , bee = b.toLowerCase()
          ;

        if ( aye === bee ) { return 0; }
        else {
            return aye < bee ? -1 : 1;
        }
    })
    .join(' ')
    .trim()
    ;
}