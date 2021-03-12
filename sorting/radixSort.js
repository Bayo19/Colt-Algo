// radix sort

function getDigit(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10
}

function digitCount(num) {
    return num.toString().length
}

function mostDigits(arr) {
    let maxDigits = 0
    for (i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

function radixSort(arr) {
    let longestDigitLength = mostDigits(arr)

    for (let i = 0; i < longestDigitLength; i++) {
        let containers = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            containers[getDigit(arr[j], i)].push(arr[j])
            console.log(containers)
        }
        arr = [].concat(...containers)
        console.log(`end outer loop`)
    }
    return arr
}

const fairy = [23, 456, 76, 89, 103, 49]
console.log(radixSort(fairy))