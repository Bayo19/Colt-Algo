// built in sorting method in Javascript

const arr = ['Steele', 'Colt', 'Data Structures', 'Algorithms']
const nums = [1, 4, 578, 245, 96, 245, 467, 67, 3455745, 254, 3653467, 53624, 436]

console.log(arr.sort())
console.log(nums.sort(function(a, b) {
    return b - a
}))