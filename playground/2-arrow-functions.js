// const square = function(x) {
//     return x*x;
// }

const square = (x) => {
    return x*x;
}

// arrow functions dont bind their own this value but they bind the value in which they are defined

console.log(square(3))