const chai = require('chai');
const { assert } = chai;

const max = string => {
    const characters = {};

    for (let character of string) {
        console.log(character, "...Character");
        console.log(characters[character], "...Characters Obj 1");
        console.log(characters[character] + 1 || 1, "...Characters Obj 2");
        characters[character] = characters[character] + 1 || 1;
        console.log(characters[character], "...Init");
    }


    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            console.log(characters[character], "...Array maxCharacter");
            console.log(maxCount, "...Max Count");
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

describe("Max Character", () => {
    it("Should return max character", () => {
        assert.equal(max("Hello Worlddlddd!"), "d");
    });
});
