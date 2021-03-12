// selection sort, finding new minimum and swap it with current

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[min], arr[j])
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i != min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }

    }

    return arr
}

let jackie = [4, 1, 6, 8, 3, 9, 2, 10, 45, 787, 24, 867]

console.log(selectionSort(jackie))