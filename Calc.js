var readlineSync = require("readline-sync");

var firstNum = readlineSync.questionInt('Please enter your first number: ');
var secondNum = readlineSync.questionInt('please enter your second number: ');
var userOperation = readlineSync.question('please enter the operation to perform (add, sub, mul, div): ');

function addition(num1, num2){
    return num1 + num2;
}
function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function divition(num1, num2){
    return num1 / num2;
}

function calculator( firstNumber, secondNumber, enteredOP){
    if (enteredOP == 'add'){
        console.log('equals: ' + addition(firstNumber, secondNumber));
    }
    else if (enteredOP == 'sub'){
        console.log('equals: ' + subtraction(firstNumber, secondNumber));
    }
    else if (enteredOP == 'mul'){
        console.log('equals: ' + multiplication(firstNumber, secondNumber));
    }
    else if (enteredOP == 'div'){
        console.log('equals: ' + divition(firstNumber, secondNumber));
    }
    else{
        console.log('error occored. Please try again');
    }
}
calculator(firstNum, secondNum, userOperation);