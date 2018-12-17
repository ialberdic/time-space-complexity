const chai = require('chai');
const { assert } = chai;

const charCount = string => {
    const table = {};

    // for (let char of string.replace(/\W/g, "").toLowerCase())
    //     table[char] = table[char] + 1 || 1;

    //If we pass alphabetic chars we can remove regex
    for (let char of string.toLowerCase()) {
        console.log(table[char], " Char 1");
        table[char] = table[char] + 1 || 1;
        console.log(table[char], " Char 2");
    }

    console.log(table, "...Table");
    return table;
};

const anagrams = (stringA, stringB) => {
    const charCountA = charCount(stringA);
    const charCountB = charCount(stringB);

    //We will just compare if the length is same otherwise returns false so exit function with false
    if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
        return false;

    //We will compare if every char in objectA is identical to objectB, otherwise is false and exit
    for (let char in charCountA)
        if (charCountA[char] !== charCountB[char]) return false;

    //To know if reach this return comment all asserts below which are true. as you will see return false exit function
    console.log("...Reach return true if it is false");
    return true;
};

const _sort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const _anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);

describe("Anagrams", () => {
    it("Should implement anagrams", () => {
        assert.equal(anagrams("hello world", "world hello"), true);
        assert.equal(anagrams("hellow world", "hello there"), false);
        assert.equal(anagrams("hellow world", "hello there!"), false);

        assert.equal(_anagrams("hello world", "world hello"), true);
        assert.equal(_anagrams("hellow world", "hello there"), false);
    });
});
