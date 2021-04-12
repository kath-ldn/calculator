// global variables
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let screenText = document.getElementById("screen-text");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const back = document.getElementById("back");

//throws error if string is too long
function checkLength(){
    let temp1 = num1.toString();
    let temp2 = num2.toString();
    let length = temp1.length + temp2.length;
    if(length > 18){
        screenText.textContent = "Error - num length";
        setTimeout(resetAll, 500);
        return true;
    } else {
        return false
    }
};

function addDecimal(){
    if(operator === "" && num1.indexOf('.') === -1){
        num1 = num1 + '.';
    } else if(operator !== "" && num2.indexOf('.') === -1){
        num2 = num2 + '.';
    } else {
        alert("Oops! You can't have more than one decimal place.")
    }
    updateScreen();
};

function updateNums(i){
    i = i.toString();
    if(operator === ""){
        num1 = num1 + i;
    }else if(operator !== ""){
        num2 = num2 + i;
    }
    updateScreen();
};

function updateScreen(){
    let tooLong = checkLength();
    if(tooLong === false){
        let display = num1 + " " + operator + " " + num2;
        screenText.textContent = display;
    }
};

function resetAll(){
    num1="";
    num2="";
    operator="";
    updateScreen();
};

function calculate(){
    let sum;
    let temp1 = parseFloat(num1);
    let temp2 = parseFloat(num2);
    if(operator === '+'){
        sum = temp1 + temp2;
    } else if(operator === '-'){
        sum = temp1 - temp2;
    } else if(operator === 'x'){
        sum = temp1 * temp2;
    } else if(operator === '/'){
        sum = temp1 / temp2;
    };
    let result = parseFloat(sum).toFixed(2);
    let resultInt = parseInt(sum);
    let compare = parseInt(sum) + ".00";
    if(result.toString() === compare){
        return resultInt;
    } else {
        return result;
    }
};

function chooseOperator(op){
    if (num1 === ""){
        alert("Select a number before the operator.")
    } else if(operator === ""){
        operator = op;
    } else if(operator != "" && num2 === "") {
        alert("Pick another number first");
    } else if (num1 !== "" && num2 !== "" && operator !== ""){
        calculate();
    }
    updateScreen();
};

function updateNumsAfterCalc(temp){
    num1 = temp;
    num2 = "";
    operator = "";
}

function pressEquals(){
    if(operator === "" || num2 === ""){
        alert("Please select two numbers and an operator");
    } else{
        let temp = calculate();
        updateNumsAfterCalc(temp);
    }
    updateScreen();
};

function backSpace(){
    num1 = num1.toString();
    num2 = num2.toString();
    if(operator === ""){
        num1 = num1.slice(0, -1);
    } else if(operator !== "" && num2 !== ""){
        num2 = num2.slice(0, -1);
    } else if(operator !== "" && num2 === ""){
        operator = "";
    }
    updateScreen();
};

//functions to set up page
(function addEventListeners(){
    //numbers
    for(let i = 0; i < 10; i++){
        let dig = document.getElementById('dig' + i);
        dig.addEventListener('click', () =>{
            updateNums(i);
    })}
    //decimal
    decimal.addEventListener('click', () => {
        addDecimal();
    })
    //operators
    plus.addEventListener("click", () =>{
        chooseOperator('+');
    })
    minus.addEventListener("click", () =>{
        chooseOperator('-');
    })
    times.addEventListener("click", () =>{
        chooseOperator('x');
    })
    divide.addEventListener("click", () =>{
        chooseOperator('/');
    })
    //reset
    reset.addEventListener('click', () => {
        resetAll();
    })
    //equals
    equals.addEventListener('click', () => {
        pressEquals();
    })
    //backspace
    back.addEventListener('click', () =>{
        backSpace();
    })
    //keydowns
    document.addEventListener("keydown", (event) => {
        keyDown(event);
    });
})();

function keyDown(event){
    let code = event.keyCode;
    if(code >= 48 && code <= 58 && !event.shiftKey){
        updateNums(code - 48);
    } else if(code === 8){
        backSpace();
    } else if(code === 13){
        pressEquals();
    } else if(code === 27){
        resetAll();
    } else if (code === 56 || code === 88) {
        chooseOperator('x');
    } else if (code === 187 && event.shiftKey) {
        chooseOperator('+');
    } else if (code === 187 && !event.shiftKey) {
        pressEquals();
    } else if (code === 189) {
        chooseOperator('-');
    } else if (code === 190) {
        addDecimal();
    } else if (code === 191) {
        chooseOperator('/');
    }
    updateScreen();
};


// Color change JS ** NEED TO ADD RESET
const turnPink = document.getElementById("turn-pink");
const turnBlue = document.getElementById("turn-blue");
const turnGreen = document.getElementById("turn-green");
const turnDefault = document.getElementById("turn-default");
const numberButtons = document.getElementsByClassName("number-button");
const operatorButtons = document.getElementsByClassName("operator");
const controlButtons = document.getElementsByClassName("control-button");
const pink = ['#EB5C60', '#ed8588', '#eda6a8'];
const blue = ['#26AEBA', '#71c2c9', '#9dcdd1'];
const green = ['#5DBC61', '#7fc983', '#a1d1a4'];
const def = ['', '', ''];

function changeColor(col){
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].style.backgroundColor = col[2];
    }
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = col[1];
    }
    for (let i = 0; i < controlButtons.length; i++) {
        controlButtons[i].style.backgroundColor = col[0];
    }
};

turnPink.addEventListener("click", () =>{
    changeColor(pink)
});
turnBlue.addEventListener("click", () =>{
    changeColor(blue)
});
turnGreen.addEventListener("click", () =>{
    changeColor(green)
});
turnDefault.addEventListener("click", () =>{
    changeColor(def)
});