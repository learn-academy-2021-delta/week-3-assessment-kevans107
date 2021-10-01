// ASSESSMENT 3: Coding practical questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

var exampleInput = 6
// Expected output: [1, 1, 2, 3, 5, 8]

var exampleInput2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibTest", () => {
    test("returns an array the length of the inputted number containing the numbers of the Fibonacci sequence", () => {
        expect(fibTest(exampleInput)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibTest(exampleInput2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Received ReferenceError: fibTest is not defined


// b) Create the function that makes the test pass.

// Pseudo Code:
const fibTest = (number) => {
// Create a function called fibTest
    let fibArray = [1, 1]
// Create an array with 1 & 1 as the first values so the loop has values to add together to complete the fibonacci sequence
 for(let i = 2; i < number; i++) {
// Create a for loop that will iterate through each value and add the two previous values together to return the next value in the sequence
// The iteration must begin at the second index so the loop has the 0 and 1 index to add together to begin the loop
// The iteration must be < the number, if it is <= the iteration will be one index greater than the number input
    let a = fibArray[i - 1];
    let b = fibArray[i - 2];
    fibArray.push(a + b);
// .push() the sum of the two previous values to the next index in the array
    }
    return fibArray
} 


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [-9, 7, 9, 199]
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOdd", () => {
    test("returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    })
})

//  ReferenceError: onlyOdd is not defined

// b) Create the function that makes the test pass.



const onlyOdd = (array) => {
    // Create a function called onlyOdd that inputs an array 
    return array.filter(value => value % 2 !== 0 && typeof value === "number").sort((a,b) => a - b) 
}
    // Use .filter to iterate through the array and create a new array of all values that are not divisible by 2 and are the value type "number"
    // Use .sort() to order the resulting array using the comparison function ((a,b) => a-b) to sort the returned odd numbers from least to greatest
    




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("accumulatingSum", () => {
    test("returns an array of the accumulating sum", () => {
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})


// b) Create the function that makes the test pass.

var numbersToAdd1 = [2, 4, 45, 9]
//Create a function called accumulatingSum that inputs an array of numbers
const accumulatingSum = (array) => {
// Use the .map function to iterate through the array with the sum of values equaling the next value in the array
    return array.map((sum => value => sum += value)(0))
}
// Return should be an array of the same length of the input array
