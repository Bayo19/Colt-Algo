// Frequency Counter Pattern

// O(n2) solution

function same(a, b) {
    if (a.length !== b.length) {
        return false
    }

    for (i = 0; i < a.length; i++) {
        let correctIndex = b.indexOf(a[i] ** 2)
        if (correctIndex == -1) {
            return false
        }
        b.splice(correctIndex, 1)
    }
    return true
}

// check that length is the same
// check that second array contains i squared

// console.log(same([1, 2, 3], [4, 9, 1]))

function anagram(a, b) {
    if (a.length !== b.length) return false

    const lookUp = {}

    for (let i = 0; i < a.length; i++) {
        let letter = a[i]
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1
    }
    console.log('initial: ', lookUp)
    for (let i = 0; i < b.length; i++) {
        let letter = b[i]
        if (!lookUp[letter]) {
            return false
        } else lookUp[letter] -= 1
        console.log(lookUp)
    }
    return true
}

console.log(anagram('steiner', 'risenet'))