// NEED TO ADD ALERT AND RESET WHEN 2 OPERATORS PRESSED IN A ROW

let dig1 = ""; //holds digit [C&W]
let dig2 =""; //holds digit [C&W]
let operator = ""; //holds operator is being used [C&W]
let screenText = "";
let finalValue = "";
let result = "";

// show screen text on display
let displayText = document.getElementById("screenText");
displayText.textContent = screenText;

//getElements for buttons
let dig = "";

function addOne() {
    let num = dig.concat("1");
    return num;
}

function addTwo() {
    let num = dig.concat("2");
    return num;
}
function addThree() {
    let num = dig.concat("3");
    return num;
}
function addFour() {
    let num = dig.concat("4");
    return num;
}
function addFive() {
    let num = dig.concat("5");
    return num;
}
function addSix() {
    let num = dig.concat("6");
    return num;
}
function addSeven() {
    let num = dig.concat("7");
    return num;
}
function addEight() {
    let num = dig.concat("8");
    return num;
}
function addNine() {
    let num = dig.concat("9");
    return num;
}
function addZero() {
    let num = dig.concat("0");
    return num;
}

function addDecimal() {
    let num = dig.concat(".");
    return num;
}

//button for reset [CHECKED AND WORKS]
const opReset = document.querySelector('#opReset');
opReset.addEventListener('click', () => {
screenText = "";
dig1="";
dig2="";
operator="";
displayText.textContent = screenText;
});

//operator functions [CHECKED AND WORK]
function addMe(dig1, dig2) {
    let dig1Int = parseFloat(dig1);
    let dig2Int = parseFloat(dig2);
    let result = dig1Int + dig2Int;
    return parseFloat(result).toFixed(2);
    }

function subtractMe(dig1, dig2) {
    let result = dig1 - dig2;
    return parseFloat(result).toFixed(2);
    }

function timesMe(dig1, dig2) {
    let result = dig1 * dig2;
    return parseFloat(result).toFixed(2);
    }

function divideMe(dig1, dig2) {
    let result = dig1 / dig2;
    return parseFloat(result).toFixed(2);
}

//chooses function based on what is held in operator var [C&W]
function letsOperate(dig1, dig2) {
if (operator === "+") {
    dig1 = parseFloat(dig1).toFixed(2);
    dig2 = parseFloat(dig2).toFixed(2);
    let result = addMe(dig1, dig2);
    displayText.textContent = result;
    return result;
} else if (operator === "-") {
    dig1 = parseFloat(dig1).toFixed(2);
    dig2 = parseFloat(dig2).toFixed(2);
    let result = subtractMe(dig1, dig2);
    displayText.textContent = result;
    return result;
} else if (operator === "x") {
    dig1 = parseFloat(dig1).toFixed(2);
    dig2 = parseFloat(dig2).toFixed(2);
    let result = timesMe(dig1, dig2);
    displayText.textContent = result;
    return result;
} else if (operator === "/" && dig2 !== "0") {
    dig1 = parseFloat(dig1).toFixed(2);
    dig2 = parseFloat(dig2).toFixed(2);
    let result = divideMe(dig1, dig2);
    displayText.textContent = result;
    return result;
} else {
    displayText.textContent = "Uhh..something went wrong...press reset?!";
}   
}

//adding number button functionality for 1
const numberOne = document.querySelector('#numberOne');
    numberOne.addEventListener('click', () => {
    if(operator === "") {
        dig1 = dig1 + addOne();
            displayText.textContent = dig1 + operator + dig2;
    } else {
        dig2 = dig2 + addOne();
            displayText.textContent = dig1 + operator + dig2;  
    }
});

let numberTwo = document.getElementById("numberTwo");
    numberTwo.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addTwo();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addTwo();
                displayText.textContent = dig1 + operator + dig2;  
        }
});
        
let numberThree = document.getElementById("numberThree");
    numberThree.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addThree();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addThree();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    
     
let numberFour = document.getElementById("numberFour");
    numberFour.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addFour();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addFour();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    

let numberFive = document.getElementById("numberFive");
    numberFive.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addFive();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addFive();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    
        
let numberSix = document.getElementById("numberSix");
    numberSix.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addSix();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addSix();
                displayText.textContent = dig1 + operator + dig2;  
        }
});   
        
let numberSeven = document.getElementById("numberSeven");
    numberSeven.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addSeven();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addSeven();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    
        
let numberEight = document.getElementById("numberEight");
    numberEight.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addEight();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addEight();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    
        
let numberNine = document.getElementById("numberNine");
    numberNine.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addNine();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addNine();
                displayText.textContent = dig1 + operator + dig2;  
        }
});    
        
let numberZero = document.getElementById("numberZero");
    numberZero.addEventListener('click', () => {
        if(operator === "") {
            dig1 = dig1 + addZero();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addZero();
                displayText.textContent = dig1 + operator + dig2;  
        }
});

let decimal = document.getElementById("decimalPoint");
    decimal.addEventListener('click', () => {
        if(operator === "" && (dig1+'').indexOf('.') < 0) {
            dig1 = dig1 + addDecimal();    
            displayText.textContent = dig1 + operator + dig2;
        } else if (operator !== "" && (dig2+'').indexOf('.') < 0) {
            dig2 = dig2 + addDecimal();
                displayText.textContent = dig1 + operator + dig2;  
        } else {
            alert("Oops! You can't have more than one decimal place.")
        }
});

//buttons for operators

function plusOperator() {
    if (dig1 === "") {
        alert("Select a number before the operator.")
    } else if(operator === "") {
        operator = "+";
        displayText.textContent = dig1 + operator + dig2;
    } else if (operator === "/" && dig2 === "0") {
        screenText = "";
        dig1 = "0";
        dig2 = "";
        operator = "";
        alert("Uhh...obviously that would just equal 0. Maybe press reset."); 
    } else if (operator !== "" && dig2 === "") {
        alert("Pick another number first");
    } else {
        let temp = letsOperate(dig1, dig2);
        dig1 = parseFloat(temp).toFixed(2);
        dig2 = "";
        operator = "+";
    }
}

const opPlus = document.querySelector('#opPlus');
opPlus.addEventListener('click', () => {
plusOperator();
});

function minusOperator() {
    if (dig1 === "") {
        alert("Select a number before the operator.")
    } else if(operator === "") {
        operator = "-";
        displayText.textContent = dig1 + operator + dig2;
    } else if (operator === "/" && dig2 === "0") {
        screenText = "";
        dig1 = "0";
        dig2 = "";
        operator = "";
        alert("Uhh...obviously that would just equal 0. Maybe press reset."); 
    } else if (operator !== "" && dig2 === "") {
        alert("Pick another number first");
    } else {
        let temp = letsOperate(dig1, dig2);
        dig1 = parseFloat(temp).toFixed(2);
        dig2 = "";
        operator = "-";
    }
}

const opMinus = document.querySelector('#opMinus');
opMinus.addEventListener('click', () => {
    minusOperator();
});

function timesOperator() {
    if (dig1 === "") {
        alert("Select a number before the operator.")
    } else if(operator === "") {
        operator = "x";
        displayText.textContent = dig1 + operator + dig2;
    } else if (operator === "/" && dig2 === "0") {
        screenText = "";
        dig1 = "0";
        dig2 = "";
        operator = "";
        alert("Uhh...obviously that would just equal 0. Maybe press reset."); 
    } else if (operator !== "" && dig2 === "") {
        alert("Pick another number first");
    } else {
        let temp = letsOperate(dig1, dig2);
        dig1 = parseFloat(temp).toFixed(2);
        dig2 = "";
        operator = "x";
    }
}

const opTimes = document.querySelector('#opTimes');
opTimes.addEventListener('click', () => {
   timesOperator();
});

function divideOperator() {
    if (dig1 === "") {
        alert("Select a number before the operator.")
    } else if(operator === "") {
        operator = "/";
        displayText.textContent = dig1 + operator + dig2;
    } else if (operator === "/" && dig2 === "0") {
        screenText = "";
        dig1 = "0";
        dig2 = "";
        operator = "";
        alert("Uhh...obviously that would just equal 0. Maybe press reset."); 
    } else if (operator !== "" && dig2 === "") {
        alert("Pick another number first");
    } else {
        let temp = letsOperate(dig1, dig2);
        dig1 = parseFloat(temp).toFixed(2);
        dig2 = "";
        operator = "/";
    }
}

const opDivide = document.querySelector('#opDivide');
opDivide.addEventListener('click', () => {
    divideOperator();
});

function equalsOperator() {
    if (operator === "/" && dig2 === "0") {
        screenText = "";
        dig1 = "0";
        dig2 = "";
        operator = "";
        alert("Uhh...obviously that would just equal 0. Maybe press reset."); 
} else if(dig2 !== "" && operator !== "") {
    let temp = letsOperate(dig1, dig2);
    dig1 = parseFloat(temp).toFixed(2);
    dig2 = "";
    operator = "";
} else if(operator !== "") {
    displayText.textContent = "Please select another number";
} else {
    displayText.textContent = "Please select an operator";
}
}

const opEquals = document.querySelector('#opEquals');
opEquals.addEventListener('click', () => {
equalsOperator();
});


// backspace function
function goBack() {
    if(operator === "") {
    let temp1 = Array.from(dig1);
    let popped = temp1.pop();
    dig1 = temp1.join("");
    parseFloat(dig1);
    } else if(operator !== "") {
        let temp1 = Array.from(dig2);
        let popped = temp1.pop();
        dig2 = temp1.join("");
        parseFloat(dig2);
    }  
}

//backspace click
const opBack = document.querySelector('#opBack');
opBack.addEventListener('click', () => {
goBack();
        displayText.textContent = dig1 + operator + dig2;
});

 //adding key functionalities
addEventListener("keydown", function(event) {
    if(event.keyCode == 49) {
        if(operator === "") {
            dig1 = dig1 + addOne();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addOne();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 50) {
        if(operator === "") {
            dig1 = dig1 + addTwo();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addTwo();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 51) {
        if(operator === "") {
            dig1 = dig1 + addThree();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addThree();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 52) {
        if(operator === "") {
            dig1 = dig1 + addFour();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addFour();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 53) {
        if(operator === "") {
            dig1 = dig1 + addFive();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addFive();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 54) {
        if(operator === "") {
            dig1 = dig1 + addSix();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addSix();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 55) {
        if(operator === "") {
            dig1 = dig1 + addSeven();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addSeven();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 56) {
        if(operator === "") {
            dig1 = dig1 + addEight();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addEight();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 57) {
        if(operator === "") {
            dig1 = dig1 + addNine();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addNine();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 48) {
        if(operator === "") {
            dig1 = dig1 + addZero();
                displayText.textContent = dig1 + operator + dig2;
        } else {
            dig2 = dig2 + addZero();
                displayText.textContent = dig1 + operator + dig2;  
        }
    } else if(event.keyCode == 190) {
        if(operator === "" && (dig1+'').indexOf('.') < 0) {
            dig1 = dig1 + addDecimal();    
            displayText.textContent = dig1 + operator + dig2;
        } else if (operator !== "" && (dig2+'').indexOf('.') < 0) {
            dig2 = dig2 + addDecimal();
                displayText.textContent = dig1 + operator + dig2;  
        } else {
            alert("Oops! You can't have more than one decimal place.")
        }
    } else if(event.keyCode == 8) {
        goBack();
        displayText.textContent = dig1 + operator + dig2;
     } else if (event.shiftKey && event.keyCode == 187) {
        plusOperator();
     } else if (event.keyCode == 189) {
        minusOperator();
     } else if (event.keyCode == 191) {
        divideOperator();
     } else if (event.keyCode == 88) {
        timesOperator();
     } else if (event.keyCode == 187) {
        equalsOperator();
     }
    });

//id page elements
const topNav = document.querySelector('#topNav');
const container = document.querySelector('#container');
const screen = document.querySelector('#screen');
var numberButton = document.getElementsByClassName('numberButton');
var operatorButton = document.getElementsByClassName('operator');
const buttonBack = document.querySelector('#opBack');
const buttonEquals = document.querySelector('#opEquals');
const buttonReset= document.querySelector('#opReset');

//turn page pink
const turnPink = document.querySelector('#turnPink');

turnPink.addEventListener('click', () => {
topNav.style.backgroundColor = '';
container.style.backgroundColor = '';
screen.style.backgroundColor = '';
for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].style.backgroundColor = '';
}
for (var i = 0; i < operatorButton.length; i++) {
    operatorButton[i].style.backgroundColor = '';
}
buttonBack.style.backgroundColor = '';
buttonEquals.style.backgroundColor = '';
buttonReset.style.backgroundColor = '';
});

//turn page blue
const turnBlue = document.querySelector('#turnBlue');

turnBlue.addEventListener('click', () => {
topNav.style.backgroundColor = '#1B5088';
container.style.backgroundColor = '#1B5088';
screen.style.backgroundColor = '#F3EAE3';
for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].style.backgroundColor = '#65A1E2';
}
for (var i = 0; i < operatorButton.length; i++) {
    operatorButton[i].style.backgroundColor = '#0D2844';
}
buttonBack.style.backgroundColor = '#365281';
buttonEquals.style.backgroundColor = '#365281';
buttonReset.style.backgroundColor = '#365281';
});

//turn page green
const turnGreen = document.querySelector('#turnGreen');

turnGreen.addEventListener('click', () => {
topNav.style.backgroundColor = '#92B39B';
container.style.backgroundColor = '#92B39B';
screen.style.backgroundColor = '#F2F6F8';
for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].style.backgroundColor = '#5DBC61';
}
for (var i = 0; i < operatorButton.length; i++) {
    operatorButton[i].style.backgroundColor = '#88BC5C';
}
buttonBack.style.backgroundColor = '#465945';
buttonEquals.style.backgroundColor = '#465945';
buttonReset.style.backgroundColor = '#465945';
});

//CATS
const CATS = document.querySelector('#CATS');

CATS.addEventListener('click', () => {
alert("Feature coming soon...");
});