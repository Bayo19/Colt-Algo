// binary search

let states = [
    'Alabama', 'Alaska', 'Arizona',
    'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska',
    'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
]

// console.log(str.split('\n'))

const arr = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]

let binarySearch_iterative = function(data, target) {
    let low = 0
    let high = data.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (target == data[mid]) {
            return true
        } else if (target > data[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false
}
console.log(binarySearch_iterative(arr, 15))