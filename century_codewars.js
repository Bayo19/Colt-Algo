function whatCentury(year) {
    let year_array = year.split('')
    year_array.pop()
    year_array.pop()

    let newYear = Number(year_array.join(''))

    if (year.split('')[2] == 0 && year.split('')[3] == 0) {
        newYear = newYear.toString()
    } else {
        newYear = (newYear + 1).toString()
    }

    let th = [0, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < th.length; i++) {
        if (newYear[1] == th[i]) {
            return `${newYear}th`
        }
    }

    let th2 = [11, 12, 13]
    for (let i = 0; i < th2.length; i++) {
        if (Number(newYear) == th2[i]) return `${newYear}th`
    }

    if (newYear[1] == 1) return `${newYear}st`
    if (newYear[1] == 2 && (Number(newYear)) > 20) return `${newYear}nd`
    if (newYear[1] == 2 && (Number(newYear)) < 20) return `${newYear}th`
    if (newYear[1] == 3) return `${newYear}rd`
}

console.log(whatCentury('2000'))