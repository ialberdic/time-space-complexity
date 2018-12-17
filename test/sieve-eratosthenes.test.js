const chai = require('chai');
const { assert } = chai;

const primes = number => {

    const arrNum = [];
    for (let i = 2; i <= number; i++) {
        console.log(i % 2, "...Result and i", i);
        if (i % 2 === 1) {
            arrNum.push(i);
        }
    }
    const arrFinal = [];
    console.log(arrNum.length, "...Length number", number);
    for (let z=0; z<arrNum.length-1; z=z+1) {
        console.log("index...",z, " Valor", arrNum[z]);
        console.log(arrNum[z]%3, " ..... ", arrNum[z]!==3);
        if (arrNum[z]%3 !==0 && arrNum[z]!==3) {
            arrFinal.push(arrNum[z]);
        }
    }

    console.log(arrFinal, "...Array Final");
};

primes(20);
    // console.log(numbers, "Recursive??...Y/N?");
    // console.log(primes.concat(prime), "...First Elvis");
    // console.log(primes, "...Second Elvis");
    // return numbers.reduce(
    //     (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    //     []
            // console.log(isPrime, "...Is Prime");
            // console.log(primes, ..."Primes");
            // console.log(prime, "...Prime");

        // }
//     );
// };
//
// describe("Sieve of Eratosthenes", () => {
//     it("Should return all prime numbers", () => {
//         assert.deepEqual(primes(10), [2, 3, 5, 7]);
//     });
// });
