const { assert } = require('chai');

const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', function () {

    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzz = `${fizz}${buzz}`;

    describe('return original value as a string when not divisible by 3 or 5', function () {

        it('returns original value as a string when not divisible by 3 or 5', function () {
            const inputValue = 7;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = inputValue.toString();

            assert.strictEqual(actualValue, expectedValue);
        });

    });

    describe(`return ${fizz} when number is divisible by 3`, function () {
    
        it(`returns ${fizz} when value is 3`, function () {
            const inputValue = 3;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = fizz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

        it(`returns ${fizz} when value is divisible by 3, but is not 3`, function () {
            const inputValue = 6;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = fizz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

    });

    describe(`return ${buzz} when number is divisible by 5`, function () {
    
        it(`returns ${buzz} when value is 5`, function () {
            const inputValue = 5;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = buzz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

        it(`returns ${buzz} when value is divisible by 5, but is not 5`, function () {
            const inputValue = 10;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = buzz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

    });

    describe(`return ${fizzBuzz} when number is divisible by 15`, function () {
    
        it(`returns ${fizzBuzz} when value is 15`, function () {
            const inputValue = 15;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = fizzBuzz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

        it(`returns ${fizzBuzz} when value is divisible by 15, but is not 15`, function () {
            const inputValue = 30;

            const actualValue = fizzbuzz(inputValue);
            const expectedValue = fizzBuzz;
            
            assert.strictEqual(actualValue, expectedValue);
        });

    });

    describe(`only accepts positive integer values`, function () {
    
        it('throws an error if value is less than 1', function () {
            const inputValue = 0;

            assert.throws(() => fizzbuzz(inputValue), 'Input must be an integer greater than 0');
        });

        it('throws an error if value is not an integer', function () {
            const inputValue = 3.8;

            assert.throws(() => fizzbuzz(inputValue), 'Input must be an integer greater than 0');
        });

        it('throws an error if value is not a number', function () {
            const inputValue = null;

            assert.throws(() => fizzbuzz(inputValue), 'Input must be an integer greater than 0');
        });

    });
});