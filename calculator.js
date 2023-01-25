function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        return "you cant divide by 0, buddy"
    }
    return num1 / num2;
}

function operate(operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2);
    }else if(operator === '-'){
        return substract(num1, num2);
    }else if(operator === '*'){
        return multiply(num1, num2);
    }else{
        return divide(num1, num2);
    }
    
}
// console.log(operate("+", 5, 4));

// let displayValue;
// let currentOperator;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const equals = document.querySelector(".equals");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiplySymbol = document.querySelector(".multiply");
const divideSymbol = document.querySelector(".divide");

const clear = document.querySelector(".clear");

const displayValue = document.querySelector(".display");

// console.log(one);
plus.addEventListener("click", () => displayValue.textContent += "+");
minus.addEventListener("click", () => displayValue.textContent += "-");
multiplySymbol.addEventListener("click", () => displayValue.textContent += "*");
divideSymbol.addEventListener("click", () => displayValue.textContent += "/");
one.addEventListener("click", () => displayValue.textContent += "1");
two.addEventListener("click", () => displayValue.textContent += "2");
three.addEventListener("click", () => displayValue.textContent += "3");
four.addEventListener("click", () => displayValue.textContent += "4");
five.addEventListener("click", () => displayValue.textContent += "5");
six.addEventListener("click", () => displayValue.textContent += "6");
seven.addEventListener("click", () => displayValue.textContent += "7");
eight.addEventListener("click", () => displayValue.textContent += "8");
nine.addEventListener("click", () => displayValue.textContent += "9");
zero.addEventListener("click", () => displayValue.textContent += "0");

clear.addEventListener("click", () => clearScreen());
equals.addEventListener("click", () => displayValue.textContent = evaluate())

function clearScreen(){
    displayValue.textContent = "";
}

function evaluate(){
    let equation = displayValue.textContent;
    let currentOperator = "";
    let leftValue = "";
    let rightValue ="";
    if(equation[0] === "+" || equation[0] === "-" || equation[0] === "*" || equation[0] === "/"){
        return "this cant be evaluated";
    }
    for(i=0; i<equation.length; i++){
        if(rightValue !== "" && (equation[i] === "+" || equation[i] === "-" || equation[i] === "*" || equation[i] === "/")){
            leftValue = operate(currentOperator, +leftValue, +rightValue);
            rightValue = "";
        }

        if(equation[i] === "+" || equation[i] === "-" || equation[i] === "*" || equation[i] === "/"){
            currentOperator = equation[i];
            // console.log(`first :${i} :${equation[i]} :${currentOperator}`);
        }else if (currentOperator === ""){
            leftValue += equation[i];
            // console.log(`second :${i} :${equation[i]} :${leftValue}`);
        }else{
            rightValue += equation[i];
            // console.log(`third :${i} :${equation[i]} :${rightValue}`);
        }
    }
    if(rightValue !== ""){
       leftValue = operate(currentOperator, +leftValue, +rightValue);
       rightValue = "";
       currentOperator = "";
    }
    // leftValue = operate(currentOperator, +leftValue, +rightValue);
    return leftValue;
}