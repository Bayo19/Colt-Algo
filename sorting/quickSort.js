// quick sort

function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[arr.length - 1],
        left = [],
        right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
                // console.log({ left, pivot, right })
        } else {
            right.push(arr[i])
                // console.log({ left, pivot, right })
        }

    }
    // console.log(`session result: `, [...quickSort(left), pivot, ...quickSort(right)])
    return [...quickSort(left), pivot, ...quickSort(right)]

}

let samantha = [28, 30, 26, 23, 64, 60, 99, 90, 41, 55, 4, 6, 17, 32]

console.log(`CONSOLE`)
console.log(`\n`, samantha, `\n\n`)
console.log(quickSort(samantha))