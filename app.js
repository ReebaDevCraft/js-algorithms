console.log("I am JS ");
fullName = 'Reeba Yaseen';
age = '45';
console.log(age);
isFollow = (true);
console.log(isFollow);
let Num = '44';
console.log(Num);
const PI= '3.14';
console.log(PI);
const student = {
     name: 'Ali',
     age:'23',
     cgpa: '2.70',
     isPass: true
}
const Product={
    offer: 'Pen touch',
    deal:'30%',
    price:'$44',
    rating:'4.5'
}
console.log(Product);

const Profile={
    tittle:'Instagram',
    post: '144',
    isFollow:true
};
console.log(Profile);
let a= 5;
let b= 6;
console.log("a+b=", a+b);
console.log("a++ =", a++);
console.log('a =', a);
//sum of two numbers
let num1= 20;
let num2 = 30;
let sum = num1+num2;
console.log("The sum is", sum);

function addNumbers(a,b){
return a+b;
};
console.log(addNumbers(10,20));

let right = 15;
if (right >= 18){
    console.log('u can vote');
}
 if (right < 18){
    console.log('you cannot vote');
 }

 let mode = 'green';
 let color;
 if (mode === 'dark'){
    color= 'balck';
 }
 else{
    color= 'white';
 }
 console.log(color);

 let height = 30;
 let round;
 if(height === 20){
round='white';
 }
 else{
    round='black';
 }
 console.log(round);

let number = 4;
if(number %2===0){
    console.log('even');
}else{
    console.log('odd');
}

let digit = 9;
if(digit %2 !==0){
    console.log('odd');
} else{
        console.log('even');
    }

    let sum1 = 15;
    let sum2 = 25;
    console.log("Number are equal(sum1==sum2)", sum1==sum2);
    console.log("inequalvent numbers are (sum1!==sum2)", sum1!==sum2);
    console.log('1st number is less than 2nd number(sum1<==sum2)', sum1<=sum2);
    let product1 = 18;
    let product2 = 22;
    console.log('pro1 is greater than pro2(product1<product2)', product1>product2);
