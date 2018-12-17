const chai = require('chai');
const { assert } = chai;


function compareValues(key, order='asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA && varB) {
            comparison = 1;
        } else if (varA && varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };

}

function getMedianArrObjects(arr) {
    const arraySorted = arr.sort(compareValues("weight", "desc"));
    let finalArr = [];
    for (let item of arraySorted) {
        finalArr.push(item.weight);
    }
    console.log(finalArr, "...Value");
    if (arraySorted.length === 2) {
        return getMeanArrObjects(arr);
    }
    return finalArr.length % 2 === 0
        ? (finalArr[finalArr.length / 2 - 1] +
        finalArr[finalArr.length / 2]) /
        2
        : finalArr[Math.floor(finalArr.length / 2)];

}

function getModeArrObjects(arr) {
    const table = {};
    arr.forEach(value => (table[value.weight] = table[value.weight] + 1 || 1));

    let modes = [];
    let max = 0;
    for (const key in table) {
        const value = parseFloat(key);
        console.log(value, "...In for and parseFloat");
        const count = table[key];
        console.log(count, "...count");
        if (count > max) {
            modes = [value];
            console.log(modes, "...Modes");
            max = count;
        } else if (count === max) modes.push(value);
    }

    if (modes.length === Object.keys(table).length) modes = [];

    return modes;
}

function getMeanArrObjects(arr) {
    let sum = 0;
    for (let item of arr) {
       sum += item.weight;
    }
    return sum / arr.length;
}



const stat1 = [ {"id": "32442kgg", "weight": 20, "name": "Ivan"}, {"id": "32442hgg", "weight": 30, "name": "Ivan"}, {"id": "32442hgg", "weight": 20, "name": "Ivan"} ];
const stat2 = [ {"id": "32442igg", "weight": 10, "name": "Alfred"}, {"id": "32442jgg", "weight": 20, "name": "Ivan"} ];

describe("Mean", () => {
    it("Should implement mean", () => {
        assert.equal(getMeanArrObjects(stat1), 23.333333333333332);
        assert.equal(getMeanArrObjects(stat2), 15);
    });
});

describe("Median", () => {
    it("Should implement median", () => {
        assert.equal(getMedianArrObjects(stat1), 30);
        assert.equal(getMedianArrObjects(stat2), 15);
    });
});

describe("Mode", () => {
    it("Should implement mode", () => {
        assert.deepEqual(getModeArrObjects(stat1), [20]);
        assert.deepEqual(getModeArrObjects(stat2), []);
    });
});
