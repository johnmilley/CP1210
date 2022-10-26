// Week 3 Examples

/*** Conditional Statements ***/

console.log('---\n')

let age = "56"

console.log(`"${age}" == 56 --> ${age == 56}`)
console.log(`"${age}" === 56 --> ${age === 56}`)

console.log('---\n')

let raining = false
let snowing = false

console.log(`Raining: ${raining}`)
console.log(`Snowing: ${snowing}`)

if (raining) {
    console.log("Bring your raincoat and umbrella. It's raining.");
} else if (snowing) {
    console.log("Dress warm, it's snowing.");
}
else {
    console.log("It is not raining or snowing. Take that for what it's worth (not much).")
}

console.log('---\n')

// check to see if age is Not a Number (NaN)
console.log(`Is ${age} not a number? ${isNaN(age)} (i.e. it is a number!)`)

/*** For Loops ***/
console.log('---\n')

for(let i = 1; i <= 10; i++) {
    console.log(i * i)
}

/*** Arrays ***/

console.log('---\n')

grades = [99, 55, 30, 76, 82.5]

grades_copy = [...grades]
grades_copy[0] = 0

console.log(`grades = ${grades}`)
console.log(`grades_copy = ${grades_copy}`)

console.log('---\n')

for (let i in grades) {
    console.log(`Index: ${i}, Grade: ${grades[i]}`)
}

console.log('---\n')

for (let grade of grades) {
    console.log(`Grade: ${grade}`)
}

console.log('---\n')
