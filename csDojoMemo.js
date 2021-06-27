// const prevValues = []
// function square(n) {
//     if(prevValues[n] != null) {
//         return prevValues[n]
//     }
//     let result = 0
//     for(let i =1; i <= n; i++){
//         for(let j = 1; j<= n; j++){
//             result += 1
//         }
//     }
//     prevValues[n] = result
//     return result
// }

// console.log(square(4728))
// console.log(square(4728))
// console.log(square(4728))
// console.log(square(4728))
// console.log(square(4728))

// memoization and dynamic programming

function fib(n, prevValues = []){
    if (prevValues[n] != null) {
        return prevValues[n]
    }
    let result

    if (n <=2) {
        result = 1
    } else {
        result = fib(n -1, prevValues) + fib(n -2, prevValues)
    }
    prevValues[n] = result
    return result
}

console.log(fib(87))

// bottom up approach

function bottomUp(n) {
    if (n <= 2) return 1
    let bottom = []
    bottom[1] = 1
    bottom[2] = 1
    console.log(bottom)
    for(let i = 3; i < n+1; i++) {
        bottom[i] = bottom[i-1] + bottom[i-2]
        console.log(bottom)
    }

    return bottom[n]
}

console.log(bottomUp(9))
