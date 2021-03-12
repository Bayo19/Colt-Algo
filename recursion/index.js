// recursion is a different way of thinking of writing solutions
// can be a cleaner alternative to iteration
// all recursive functions sneed a base case
// Different Input

// 1.
function countDown(num) {
    if (num <= 0) {
        console.log('feck off')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(5)

// 2. 
function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(7))