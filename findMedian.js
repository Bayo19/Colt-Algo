// find median of two sorted arrays

function findMedian(arr1, arr2) {

    let result = [],
        i = 0,
        j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    let medianIndex = Math.floor(result.length / 2)

    console.log(result)
    return result.length % 2 !== 0 ? result[medianIndex] : (result[medianIndex - 1] + result[medianIndex]) / 2

}



const stan = [3, 6, 9, 24, 76]
const jacklyn = [2, 16, 56, 80, 87]
console.log(findMedian(stan, jacklyn))