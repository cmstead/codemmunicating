function disemvowel(stringToDisemvowel, extraCharactersToRemove = []) {
    const vowels = 'aeiou'.split('').concat(extraCharactersToRemove);
    let disemvoweledString = stringToDisemvowel;

    if(typeof stringToDisemvowel !== 'string') {
        throw new Error('Value must be a string');
    }

    vowels.forEach(vowel => {
        const caseInsensitiveVowelPattern = new RegExp(vowel, 'ig');

        disemvoweledString = disemvoweledString.replace(caseInsensitiveVowelPattern, '');
    });

    return disemvoweledString;
}

module.exports = disemvowel;