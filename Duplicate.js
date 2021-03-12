// remove duplicate without making new array

function rmDup(array) {
    let lastIndex = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[lastIndex]) {
            ++lastIndex
            array[lastIndex] = array[i]
        }
    }
    for (i = lastIndex + 1; i < array.length; i++) {
        array.pop()
    }
    console.log(array)
}

const input = [0, 0, 567, 1, 1, 78, 2, 67, 3, 4, 82, 82, 82]

rmDup(input)