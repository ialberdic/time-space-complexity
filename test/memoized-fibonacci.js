const chai = require('chai');
const { assert } = chai;

const fibonacci = (element, cache = []) => {
    console.log("Entra en function");
    if (cache[element]) { console.log(cache[element], "...Return cache element"); return cache[element]; }
    else {
        if (element < 3) { console.log("...Return because is < 3"); return 1; }
        else {
            console.log(element, "...Element");
            console.log(cache, "...Cache");
            // console.log(fibonacci(element - 1, cache), "...Uno");
            // console.log(fibonacci(element - 2, cache), "...Dos");
            // fibonacci(element - 1, cache)
        }
            cache[element] =
                fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
    }
    return cache[element];
};

const _memoize = fn => {
    const cache = {};
    return (...args) => {
        if (cache[args]) return cache[args];

        const output = fn.apply(this, args);
        cache[args] = output;
        return output;
    };
};

const _fibonacci = element =>
    element < 2
        ? element
        : _memoized_fibonacci(element - 1) + _memoized_fibonacci(element - 2);
const _memoized_fibonacci = _memoize(_fibonacci);

describe("Memoized Fibonacci", () => {
    it("Should implement memoized fibonacci", () => {
        assert.equal(fibonacci(6), 8);
        assert.equal(fibonacci(10), 55);
        // assert.equal(_memoized_fibonacci(10), 55);
    });
});
