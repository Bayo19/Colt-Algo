// iterative factorial

function factorial(num) {
    let total = 1
    if (num == total) return total

    for (let i = num; i > 1; i--) {
        total = total *= i
    }
    return total
}

console.log(factorial(4))

// recursive factorial

function rec_factorial(num) {
    if (num == 1) return 1
    return num * rec_factorial(num - 1)
}

console.log(rec_factorial(4))