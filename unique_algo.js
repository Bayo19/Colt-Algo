function unique(arr) {
    var lookup = {}

    for (let i = 0; i < arr.length; i++) {
        lookup[arr[i]] ? lookup[arr[i]] += 1 : lookup[arr[i]] = 1
    }

    let result = []
    for (const [k, v] of Object.entries(lookup)) {
        if (v == 1) {
            result.push(k)
        }
    }

    return result
}

console.log(unique(['A', 'B', 'A', 'C', 'A']))

function countConsonants(str) {

    let letters = str.toLowerCase().replace(/\d/g, '').replace(/\W/g, '')
    let lookup = {}
    let count = []
    for (let i = 0; i < letters.length; i++) {
        if (lookup[letters[i]]) {
            lookup[letters[i]] += 1

        } else {
            lookup[letters[i]] = 1
            count.push(letters[i])
        }
    }

    return count.filter(function(a) {
        if (a !== 'a' && a !== 'e' && a != 'i' && a !== 'o' && a !== 'u') {
            return a
        }
    }).length

}

console.log(countConsonants('MvE6y'))

console.clear()