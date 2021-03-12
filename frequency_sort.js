function frequency_sort(arr) {
    let frequency = {}
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] ? frequency[arr[i]] += 1 : frequency[arr[i]] = 1
    }
    console.log(frequency)
    let frequency_array = Object.entries(frequency).sort(function(a, b) {
        if (a[1] > b[1]) return -1
        if (a[1] < b[1]) return 1
        return 0;
    })
    console.log(frequency_array)

    let final_array = []

    for (let i = 0; i < frequency_array.length; i++) {
        for (let j = 0; j < frequency_array[i][1]; j++) {
            final_array.push(Number(frequency_array[i][0]))
        }
    }

    return final_array
}

console.log(frequency_sort([5, 8, 6, 5, 1, 4, 9, 8, 5]))