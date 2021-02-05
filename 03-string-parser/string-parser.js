function parseString(stringToParse) {
    let parseResult = [];

    let lastCharacter = null;
    let lastPair = null;

    stringToParse.split('')
        .forEach((character) => {
            if (lastCharacter !== character) {
                lastPair = [character, 1];
                parseResult.push(lastPair);
            } else {
                lastPair[1]++;
            }

            lastCharacter = character;
        });

    return parseResult;
}

module.exports = {
    parseString
};