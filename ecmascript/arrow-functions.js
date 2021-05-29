sum(2, 3);

// function declaration: soggetta a hoisting

function sum(param1, param2) {
    return param1 + param2;
    // return result;
    // return null;
    // return undefined;
}

// function expression: non soggetta a hoisting

const sum = function(param1, param2) {
    return param1 + param2;
};

button.onclick = function() {};
button.addEventHandler('click', function(a, b) { return a + b });
button.addEventHandler('click', sum);

function sum(a, b) {
    return a + b;
}

// IIFE - Immediately Invoked Function Expression
(function(globalObject) {
    var a = 2;
    console.log(a);

    globalObject.b = 3;
})(window);

// arrow function: binding del this

console.log(this);
const sum = (a, b) => {
    console.log(this);
    return a + b;
};

sum(2, 3);

const sum = (a, b) => a + b;

const printMessage = (message) => console.log(message);

const printIf = (message, condition) => {
    if (condition) {
        console.log(message);
    } else {
        console.log('Nope');
    }
}

// ternary operator
// condition ? exprIfTrue : exprIfFalse

const printIf = (message, condition) => condition
    ? console.log(message)
    : console.log('Nope');

const printIf = (message, condition) => condition && console.log(message);