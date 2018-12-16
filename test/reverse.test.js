const chai = require('chai');

const reverseTest = string =>
    string
        .split("")
        .reverse()
        .join("");

const _reverse = string => {
    let result = "";
    for (let character of string) {
        result = character + result;
        console.log(result, "...Result");
    }
    return result;
};

const __reverse = string =>
    string.split("").reduce((result, character) => character + result);

describe("String Reversal", () => {
    it("Should reverse string", () => {
        assert.equal(reverseTest("Hello World!"), "!dlroW olleH");
        assert.equal(_reverse("Hello World!"), "!dlroW olleH");
        assert.equal(__reverse("Hello World!"), "!dlroW olleH");
    });
});

// mocha.run();
