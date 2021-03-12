// sumZero - find first to items in sorted arr that add to 0
// the naive solution is nested loops which is O(n2)
// the below solution, towards the middle, is O(1)
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}



// console.log(sumZero([-4, -2 - 1, 0, 2, 5, 10]))

// below is more like using frequency counter pattern
const test = [1, 2, 3, 3, 4, 7, 9, 9, 3, 3, 7]

function findUniqueValues(arr) {
    let frequency = {}
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        frequency[item] ? frequency[item] += 1 : frequency[item] = 1
    }


    for (const [key, value] of Object.entries(frequency)) {
        if (value === 1) {
            return key
        }
    }

}

// create object
// for count frequency for all items
// filter object and return the value that only occurs once
console.log('find unique: ', findUniqueValues(test))

function countUniqueValue(arr) {
    let frequency = {}

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        frequency[item] ? frequency[item] += 1 : frequency[item] = 1
    }

    let count = 0
    for (const [k, v] of Object.entries(frequency)) {
        if (v === 1) {
            count++
        }
    }
    return count
}

console.log('count unique: ', countUniqueValue(test))