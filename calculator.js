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
function exponentiation(num1, num2){
    if(num1 > 20 || num2 > 20){
        return "cant calculate number that high"
    }
    return num1 ** num2;
}

function operate(operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2);
    }else if(operator === '-'){
        return substract(num1, num2);
    }else if(operator === '*'){
        return multiply(num1, num2);
    }else if(operator === '^'){
        return exponentiation(num1, num2);
    }
    else{
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
const dot = document.querySelector(".dot");
const backspace = document.querySelector(".backspace");
const exponentiationOperator = document.querySelector(".exponentiation");

// console.log(one);
function limit(){
    if(displayValue.textContent.length < 10){
        return true;
    }
}
plus.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "+"}
});
minus.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "-"}
});
multiplySymbol.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "*"}
});
divideSymbol.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "/"}
});
one.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "1"}
});
two.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "2"}    
});
three.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "3"}
});
four.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "4"}
});
five.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "5"}
});
six.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "6"}
});
seven.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "7"}
});
eight.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "8"}
});
nine.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "9"}
});
zero.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "0"}
});
dot.addEventListener("click", function (){ 
    if(limit()){
     if(!displayValue.textContent.includes(".") && !displayValue.textContent == "")
        {displayValue.textContent += ".";}
}
});
// minus.addEventListener("click", () => displayValue.textContent += "-");
// multiplySymbol.addEventListener("click", () => displayValue.textContent += "*");
// divideSymbol.addEventListener("click", () => displayValue.textContent += "/");
// one.addEventListener("click", () => displayValue.textContent += "1");
// two.addEventListener("click", () => displayValue.textContent += "2");
// three.addEventListener("click", () => displayValue.textContent += "3");
// four.addEventListener("click", () => displayValue.textContent += "4");
// five.addEventListener("click", () => displayValue.textContent += "5");
// six.addEventListener("click", () => displayValue.textContent += "6");
// seven.addEventListener("click", () => displayValue.textContent += "7");
// eight.addEventListener("click", () => displayValue.textContent += "8");
// nine.addEventListener("click", () => displayValue.textContent += "9");
// zero.addEventListener("click", () => displayValue.textContent += "0");
// dot.addEventListener("click", function() { 
//     if(!displayValue.textContent.includes(".") && !displayValue.textContent == ""){displayValue.textContent += ".";}
// });
backspace.addEventListener("click", function() {
    tempVar = Array.from(displayValue.textContent);
    tempVar.pop();
    displayValue.textContent = tempVar.join("");
})
exponentiationOperator.addEventListener("click", function (){ 
    if(limit()){displayValue.textContent += "^"}
});
// exponentiationOperator.addEventListener("click", () => displayValue.textContent += "^");

clear.addEventListener("click", () => clearScreen());
equals.addEventListener("click", () => displayValue.textContent = evaluate())

function clearScreen(){
    displayValue.textContent = "";
}

// adding keyboard support
window.addEventListener('keydown', (e) => {
    if(e.key == "1"){
        one.click();
    }else if(e.key == "2"){
        two.click();
    }else if(e.key == "3"){
        three.click();
    }else if(e.key == "4"){
        four.click();
    }else if(e.key == "5"){
        five.click();
    }else if(e.key == "6"){
        six.click();
    }else if(e.key == "7"){
        seven.click();
    }else if(e.key == "8"){
        eight.click();
    }else if(e.key == "9"){
        nine.click();
    }else if(e.key == "0"){
        zero.click();
    }else if(e.key == "*"){
        multiplySymbol.click();
    }else if(e.key == "/"){
        divideSymbol.click();
    }else if(e.key == "+"){
        plus.click();
    }else if(e.key == "-"){
        minus.click();
    }else if(e.key == "^"){
        exponentiationOperator.click();
    }else if(e.key == "."){
        dot.click();
    }else if(e.key == "Backspace"){
        backspace.click();
    }else if(e.key == "Enter"){
        equals.click();
    }
})

function evaluate(){
    let equation = displayValue.textContent;
    let currentOperator = "";
    let leftValue = "";
    let rightValue = "";
    if(equation[0] === "+" || equation[0] === "-" || equation[0] === "*" || equation[0] === "/" || equation[0] === "^"){
        return "this cant be evaluated";
    }
    for(i=0; i<equation.length; i++){
        if(rightValue !== "" && (equation[i] === "+" || equation[i] === "-" || equation[i] === "*" || equation[i] === "/" || equation[i] === "^")){
            leftValue = operate(currentOperator, +leftValue, +rightValue);
            rightValue = "";
        }

        if(equation[i] === "+" || equation[i] === "-" || equation[i] === "*" || equation[i] === "/" || equation[i] === "^"){
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
    // console.log(leftValue,+ "  " + leftValue.toString().length);
    // heres a code that makes long integrals round up. 
    if(leftValue.toString().includes(".") && leftValue.toString().length > 10){
        leftValue = Math.floor(leftValue * 100000) /100000;
        console.log("heres problem");
    } 
    return leftValue;
}