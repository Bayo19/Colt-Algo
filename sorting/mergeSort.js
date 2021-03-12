// merge sort

function merge(a, b) {
    let arr = [],
        i = 0,
        j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            arr.push(a[i])
            i++
        } else {
            arr.push(b[j])
            j++
        }
    }

    while (i < a.length) {
        arr.push(a[i])
        i++
    }

    while (j < b.length) {
        arr.push(b[j])
        j++
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2),
        a = mergeSort(arr.slice(0, mid)),
        b = mergeSort(arr.slice(mid))

    return merge(a, b)

}

let stacey = [1, 4, 6, 15, 24, 2, 5, 17, 29]

console.log(mergeSort(stacey))