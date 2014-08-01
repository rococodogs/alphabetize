var test = require('tape');
var alph = require('./');

test('returns string sorted alphabetically', function(t) {
    var sample = "the cat is faster than the dog",
        expect = "cat dog faster is than the the";

    t.equal(alph(sample), expect);
    t.end();
});

test('treats caps indifferently', function(t) {
    var sample = "the CAT is FASTER than THE dog",
        expect = "CAT dog FASTER is than THE the";

    t.equal(alph(sample), expect);
    t.end();
});

test('dumps punctuation', function(t) {
    var sample = "the cat! is faster?? than the dog??!",
        expect = "cat dog faster is than the the";

    t.equal(alph(sample), expect);
    t.end();
});