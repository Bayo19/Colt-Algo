// fibonacci algorithm

function fib(n) {
    let root = [0]
    if (n < 1) {
        return root
    } else if (n == 1) { root.push(1); return [1] }

    for (let i = 2; i <= n; i++) {
        root = fib(2)
            // root.push(root[i-1] + root[i-2])
        console.log(root)
    }


    return root
}

console.log(fib(6))