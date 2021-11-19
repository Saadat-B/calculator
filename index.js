const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const screen = document.querySelector('#screen');

let text = '';

function display(e){
    let input = e.target.textContent;
    text = text+input;
    console.log(text);
    screen.textContent = text;
};

zero.addEventListener('click', display)
one.addEventListener('click', display)
two.addEventListener('click', display)
three.addEventListener('click', display)
four.addEventListener('click', display)
five.addEventListener('click', display)
six.addEventListener('click', display)
seven.addEventListener('click', display)
eight.addEventListener('click', display)
nine.addEventListener('click', display)


// ADD FUNCTION
function add(a,b){
    return a+b;
};

// SUBTRACT FUNCTION 
function sub(a,b){
    return a-b;
};

// MULTIPLY FUNCTION 
function mul(a,b){
    return a*b;
};

// DIVIDE FUNCTION
function div(a,b){
    return a/b;
};

// OPERATE FUNCTION 
function operate(a,b,operator){
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '*':
            return mul(a,b);
            break;
        case '/':
            return div(a,b);
            break;        
    }
}




