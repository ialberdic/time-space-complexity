const chai = require('chai');

// const isPalindrome = string => {
//     const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
//     const stringCharacters = string
//         .toLowerCase()
//         .split("")
//         .reduce(
//             (characters, character) =>
//                 validCharacters.indexOf(character) > -1
//                     ? characters.concat(character)
//                     : characters,
//             []
//         );
//     console.log("world"
//         .toLowerCase()
//         .split("")
//         .reduce(
//             (characters, character) =>
//                 validCharacters.indexOf(character) > -1
//                     ? characters.concat(character)
//                     : characters,
//             []
//         ));
//     return stringCharacters.join("") === stringCharacters.reverse().join("");
// };

const _isPalindrome = string =>
    string
        .split("")
        .every((character, index) => character === string[string.length - 1 - index]);

// const __isPalindrome = string => {
//     const cleaned = string.replace(/\W/g, "").toLowerCase();
//
//     return (
//         cleaned ===
//         cleaned
//             .split("")
//             .reverse()
//             .join("")
//     );
// };

const { assert } = chai;

describe("Palindrome", () => {
    console.log("...Done");
    it("Should return true", () => {
        assert.equal(_isPalindrome("world. .dlrow"), true);
        assert.equal(
            _isPalindrome("world. .dlrow"),
            true
        );
    });

    it("Should return false", () => {
        assert.equal(_isPalindrome("sit ad est love"), false);
        assert.equal(_isPalindrome("sit ad est love"), false);
    });
});
