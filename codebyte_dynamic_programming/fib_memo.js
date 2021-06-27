/* 1 - Time complexity is not good
because we keep making unecessary recursive function calls.
Instead we can store results of a fib call if it will be called again
*/

const fib = (n) => {
    if (n <= 2) return 1

    return fib(n-1) + fib(n -2)
}

console.log(fib(8))

/* 2 - memoization using object

*/

const fib_memo = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(50), ' - memoization function')
