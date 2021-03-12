// not very efficient

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            return bubbleSort(arr)
        }
    }
    return arr
}

const shane = [34, 98, 23, 65, 34, 5, 7, 3, 2, 4, 6, 8, 34, 45, 98, 0, 57, 45, 846, 5, 473, ]

console.log(bubbleSort(shane))