const chai = require('chai');
const { assert } = chai;

function maxProfit(prices) {
    let minBuyPrice = prices[0],
        maxSellPrice = prices[1];
    let maxProfit = maxSellPrice - minBuyPrice;
    let changeBuyPrice = false;

    for (let index = 2; index < prices.length; index++) {
        if (changeBuyPrice) minBuyPrice = prices[index];
        const sellPrice = prices[index + 1];

        if (minBuyPrice > sellPrice) changeBuyPrice = true;
        else {
            changeBuyPrice = false;
            const profit = sellPrice - minBuyPrice;
            if (profit > maxProfit) { maxProfit = profit; maxSellPrice = sellPrice; }
            //I don't really like parenthesis to avoid brackets
                // console.log((maxProfit = profit), (maxSellPrice = sellPrice), "...WTF")
            //     maxProfit = profit;
            //     maxSellPrice = sellPrice;
            // }
        }
    }

    return [minBuyPrice, maxSellPrice];
}

describe("Max Profit", () => {
    it("Should return minimum buy price and maximum sell price", () => {
        assert.deepEqual(maxProfit([3, 2, 3, 4, 5]), [3, 5]);
        assert.deepEqual(maxProfit([3, 3, 2, 5, 4]), [3, 5]);
        assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
    });
});
