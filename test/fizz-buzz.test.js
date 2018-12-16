const chai = require('chai');
const { assert } = chai;

const fizzBuzz = number => {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (i % 6 === 0) output.push("Fizz Buzz");
        else if (i % 2 === 0) output.push("Fizz");
        else if (i % 3 === 0) output.push("Buzz");
        else output.push(i);
    }
    return output;
};

let output;

describe("Fizz Buzz", () => {
    beforeEach(() => (output = fizzBuzz(30)));

    it("Should output number", () => {
        assert.equal(output[0], 1);
    });

    it("Should output Fizz", () => {
        assert.equal(output[1], "Fizz");
    });

    it("Should output Buzz", () => {
        assert.equal(output[2], "Buzz");
    });

    it("Should output Fizz Buzz", () => {
        assert.equal(output[5], "Fizz Buzz");
    });
});
