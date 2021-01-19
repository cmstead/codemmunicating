const { assert } = require('chai');

const disemvowel = require('./disemvowel');

describe('Disemvowel - remove all the vowels!', function () {

    describe('remove all vowels from a string', function () {
    
        it('removes `a` from a one-character string', function () {
            const stringToDisemvowel = 'a';

            const actualValue = disemvowel(stringToDisemvowel);
            const expectedValue = '';

            assert.equal(actualValue, expectedValue);
        });

        it('removes `a` from a two character string containing one vowel', function () {
            const stringToDisemvowel = 'at';

            const actualValue = disemvowel(stringToDisemvowel);
            const expectedValue = 't';

            assert.equal(actualValue, expectedValue);
        });

        it('remove each of the common vowels from a string containing only vowels', function () {
            const stringToDisemvowel = 'aeiou';

            const actualValue = disemvowel(stringToDisemvowel);
            const expectedValue = '';

            assert.equal(actualValue, expectedValue);
        });

    });

    describe('allow user to specify extra characters to remove', function () {

        it('removes `y` when included in an extra characters array', function () {
            const stringToDisemvowel = 'Is this is the way';
            const extraCharactersToRemove = ['y'];

            const actualValue = disemvowel(stringToDisemvowel, extraCharactersToRemove);
            const expectedValue = 's ths s th w';

            assert.equal(actualValue, expectedValue);
        });
    
    });

    describe('do not accept anything that is not a string', function () {
    
        it('throw an error if value to disemvowel is not a string', function () {
            const valueToDisemvowel = null;

            assert.throws(() => disemvowel(valueToDisemvowel), 'Value must be a string');
        });

    });

});