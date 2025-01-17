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
    if (!Array.isArray(gpas) || gpas.length === 0) {
        return "Invalid input: Please provide an array of GPAs.";
    }

    const totalGPA = gpas.reduce((sum, gpa) => {
        if (typeof gpa !== "number" || gpa < 0 || gpa > 4) {
            throw new Error("Each GPA must be a number between 0 and 4.");
        }
        return sum + gpa;
    }, 0);

    const cgpa = totalGPA / gpas.length;

    return cgpa.toFixed(2);
}

try {
    const semesterGPAs = [3.0, 3.5, 3.7, 3.8]; 
    console.log("Your CGPA is: " + calculateCGPA(semesterGPAs));
} catch (error) {
    console.error(error.message);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); 

function validateForm() {
    const formFields = document.querySelectorAll("input[required], textarea[required]");
    let isValid = true;

    formFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.border = "2px solid red";
        } else {
            field.style.border = "1px solid #ccc";
        }
    });

    if (!isValid) {
        alert("Please fill all the required fields.");
    }
    return isValid;
}
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Target section not found!");
    }
}

<button onclick="smoothScroll('section1')">Go to Section 1</button>
<div id="section1">This is Section 1</div>
