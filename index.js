module.exports = alphabetize;

function alphabetize(str) {
    return str
    .replace(/[\?\!\@\#\$\%\^\&\*\(\)\,\.\{\}\[\}\"\:\;\~\`\<\>\+\=\\\|0-9]+/g, '')
    .split(/\s/)
    .sort(function(a,b){
        if ( a === b ) { return 0; }
        else {
            return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
        }
    })
    .join(' ')
    ;
}