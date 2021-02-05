function throwIfValueIsInvalid(value) {
    const valueIsLessThan1 = value < 1;
    const valueIsNotAnInteger = Math.floor(value) !== value;

    if (valueIsLessThan1 || valueIsNotAnInteger) {
        throw new Error('Input must be an integer greater than 0');
    }
}

function dividesValue(value) {
    return function (divisor) {
        return value % divisor === 0;
    }
}

function fizzbuzz(value) {
    throwIfValueIsInvalid(value);

    const valueIsDivisibleBy = dividesValue(value);

    if (valueIsDivisibleBy(15)) {
        return 'FizzBuzz';
    } else if (valueIsDivisibleBy(3)) {
        return 'Fizz';
    } else if (valueIsDivisibleBy(5)) {
        return 'Buzz';
    } else {
        return value.toString();
    }
}

module.exports = fizzbuzz;