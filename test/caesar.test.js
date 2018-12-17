const chai = require('chai');
const { assert } = chai;

const caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {
            console.log("...Found it");
            output += letter;
            continue;
        }
        console.log("...Continue");
        console.log(alphabet.indexOf(letter), "..Alphabet index of letter");
        let index = alphabet.indexOf(letter) + number % 26;
        console.log(index, "...Index");
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        console.log((string[i] === string[i].toUpperCase()), "...Y/N");

        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }

    return output;
};

function _caesarCipher(str, n) {
    let result = Array(str.length);
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        console.log(code, "...Code 1");
        let lower = "a".charCodeAt(0);
        if (code >= lower && code < lower + 26) {
            console.log(code, "...Code 2");
            code = (code - lower + n) % 26 + lower;
        }
        let upper = "A".charCodeAt(0);
        if (code >= upper && code < upper + 26) {
            console.log(code, "...Code 3");
            code = (code - upper + n) % 26 + upper;
        }
        result[i] = String.fromCharCode(code);
        console.log(result[i], "...Result");
    }
    return result.join("");
}

describe("Caesar Cipher", () => {
    it("Should shift to the right", () => {
        assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
        assert.equal(_caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
    });

    it("Should shift to the left", () => {
        assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
        // assert.equal(_caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
    });
});
