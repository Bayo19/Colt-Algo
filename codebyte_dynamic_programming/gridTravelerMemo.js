// how many ways to get from start to end of 'grid

// apparently it's a like a continuation of fibonacci

const gridTraveler = (row, col) => {
    if(row == 1 && col == 1) return 1

    if(row == 0 || col == 0) return 0

    return gridTraveler(row -1, col) + gridTraveler(row, col -1)
}

console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
console.log(gridTraveler(3,3))
console.log(gridTraveler(9,8))


const grid_traveler_memo = (row, col, memo = {}) => {
    
}