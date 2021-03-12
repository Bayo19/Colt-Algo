function addArrays(a, b) {
    if (a.length < 1 && b.length < 1) return []

    let newA = a.join('')
    let newB = b.join('')
    let res_one = Number(newA) + Number(newB)
    console.log(res_one)
    let res_two = res_one.toString().split('')
    console.log(res_two)
    if (res_two[0] == '-') {
        let finalRes = []
        for (let i = 0; i < res_two.length; i++) {
            finalRes.push(Number(res_two[i]))
        }
        finalRes.shift()
        finalRes[0] = -Math.abs(finalRes[0])
        return finalRes
    }
    let finalRes = []
    for (let i = 0; i < res_two.length; i++) {
        finalRes.push(Number(res_two[i]))
    }

    return finalRes
}

console.log(addArrays([8, 7], [3, 4]))