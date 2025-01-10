function myfunction(){
    console.log('Hi we are JS algorithm')
}
myfunction();

function classfunction(msg){
    console.log(msg)
}
classfunction('JS is very easy to learn');

classfunction('JS is very easy to learn');

function sum(x,y){
    console.log(x+y);
}

function mycode(a,b){
     let s=a*b;
    return s;
}
console.log (mycode(4,4));

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
function calculateCGPA(gpas) {
    // Check if the input is a valid array
    if (!Array.isArray(gpas) || gpas.length === 0) {
        return "Invalid input: Please provide an array of GPAs.";
    }

    // Sum the GPAs and calculate the CGPA
    const totalGPA = gpas.reduce((sum, gpa) => {
        if (typeof gpa !== "number" || gpa < 0 || gpa > 4) {
            throw new Error("Each GPA must be a number between 0 and 4.");
        }
        return sum + gpa;
    }, 0);

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output: 12

