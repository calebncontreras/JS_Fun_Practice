// Problem: 
// Write a function acc that takes a function and an initial value
// and returns a function that runs the initial function on each argument,
// accumulating the result

//Solution:

//function  acc 
//@param: accFunction() of type func: *A function for processing values array
//@param: ...rest param for generalized arguments
//Example Input: accFunction(addNumbers, 1,2,3,4)
//Returns result of accFunction(rest)
const acc = (accFunction, ...rest) => {
    return accFunction(rest);
}

//function addNumbers
//@param: arr *an array of decimal numbers
//Example Input: [1,2,3,4]
///Returns: 10 
const addNumbers = (arr) => {
    return arr.reduce((result, currentValue) => {
        return result += currentValue;
    }, 0)
}

//Test
console.log(
    acc(addUp, 2, 4, 3, 4)
)