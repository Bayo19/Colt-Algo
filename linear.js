let arr = [4, 7, 11, 14]

function linearSearch(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        } else return false

    }
}

console.log(linearSearch(arr, 42))