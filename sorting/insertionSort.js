// insertion sort

function insertionSort(array) {
    if (array.length <= 1) {
        return array
    }

    for (let i = 1; i < array.length; i++) {
        let elToinsert = array[i]
        let j = i - 1

        while (j >= 0 && array[j] > elToinsert) {
            array[j + 1] = array[j]
            j--

        }
        array[j + 1] = elToinsert
    }
    return array
}

const kathy = [47, 28, 345, 46, 798, 75, 16, 59, 7365]

// console.log(insertionSort(kathy))

function newInsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        for (var j = i - 1; j >= 0 && array[j] > current; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = current
    }
    return array
}

// insertion sort is O(n^2)

// had to use var in the inner for loop because of block scoping not allowing access to j outside of the inner for loop. In order not to do this, use while loop which allows us to access j outside of it's block.
console.log(newInsertionSort(kathy))