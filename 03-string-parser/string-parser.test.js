const { assert } = require('chai');

const { parseString } = require('./string-parser');

// Original problem posited
// Parse this string: 'aaaabbbcca'
// Return this: [['a', 4], ['b', 3], ['c', 2], ['a', 1]]

describe('String Parser', function () {

    describe('Parse String', function () {
    
        it('parses string containing one character and returns correct array of one pair', function () {
            const stringToParse = 'a';

            const result = parseString(stringToParse);

            const expectedResult = [['a', 1]];

            assert.deepEqual(result, expectedResult);
        });

        it('parses string containing two of the same letter, and returns correct array of one pair', function () {
            const stringToParse = 'aa';

            const result = parseString(stringToParse);

            const expectedResult = [['a', 2]];

            assert.deepEqual(result, expectedResult);
        });

        it('parses string containing two different letters, and returns correct array of two pairs', function () {
            const stringToParse = 'ab';

            const result = parseString(stringToParse);

            const expectedResult = [['a', 1], ['b', 1]];

            assert.deepEqual(result, expectedResult);
        });

        it('parses a string containing three letters, one is duplicated consecutively, and returns correct array of two pairs', function () {
            const stringToParse = 'abb';

            const result = parseString(stringToParse);

            const expectedResult = [['a', 1], ['b', 2]];

            assert.deepEqual(result, expectedResult);
        });

        it('parses string provided from Twitter, and produces expected result', function () {
            const stringToParse = 'aaaabbbcca';

            const result = parseString(stringToParse);

            const expectedResult = [['a', 4], ['b', 3], ['c', 2], ['a', 1]];

            assert.deepEqual(result, expectedResult);
        });

    });

});