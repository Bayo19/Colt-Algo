// recursive capitalize word
const log = console.log

function capitalize(str) {
    if (str.length === 1) return str.toUpperCase()
    console.log(str)
    return str[0].toUpperCase() + capitalize(str.slice(1))
}

log(capitalize('fairy'))