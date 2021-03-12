// Big O is time relative to input of a function

// nested O(n) is O(n2)

// Linear - as n scales, the runtime scales  - O(n)
// quadratic - as n grows, the runs time squares - O(n2)
// constant  - as n grows  nothing changes - O(1)

// Objects - Big O

let instructor = {
    firstName: 'Kelly',
    isGay: false,
    favNum: [3, 7, 9, 11]

}

/*
Insertion, Removal, Access - O(1)
Searching - O(n)
*/


/*
Object.keys, Object.entries - O(n)
*/

console.log(Object.keys(instructor))

// Arrays Big O


const names = ['Michael', 'Mariah', 'Melissa']
const values = [true, {},
    [], 2, 'awesome'
]

/*
Access - O(1) - no matter what element is being accessed
Insertion/Removal - it depends. adding to end, pushing is not as bad as adding to beginning of array as unshifting requires reindexing every item in the array

- Unshifting is O(n) and Shifting is O(n) as both require reindexing
- Push and Pop are O(1)
*/