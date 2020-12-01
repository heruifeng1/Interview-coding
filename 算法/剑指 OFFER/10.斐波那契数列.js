/**
 * @param {number} n
 * @return {number}
 */
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
var fib = function(n) {
    if(n<2){
        return n;
    }
    let fibMinusOne = 1;
    let fibMinusTwo = 0;
    let fibN;
    for (let i = 2; i <= n; ++i) {
        // console.log(fibMinusOne,fibMinusTwo)
        fibN = fibMinusOne + fibMinusTwo;
        fibMinusTwo = fibMinusOne;
        fibMinusOne = fibN;
    }
    return fibN
};
console.log(fib(4)===3)
console.log(fib(5)===5)
console.log(fib(6)===8)
console.log(fib(7)===13)
console.log(fib(8)===13)
