const screen = document.querySelector('#screen');
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
const ac = document.querySelector('#ac');
const plusMinus = document.querySelector('#plusMinus');
const percentage = document.querySelector('#percentage');
const slash = document.querySelector('#slash');
const star = document.querySelector('#star');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const dot = document.querySelector('#dot');



let text = '';
let value1;
let value2;
let operator;
screen.textContent = 0;

let state = false;
let equalState = false;
let colorState = false;

function clear(e){
    if(e.target.textContent === 'AC'){
        text = '';
        value1 = '';
        value2 = '';
        screen.textContent = 0;
    }
}

function display(e){
    if(equalState){
        text = '';
        value1 = '';
        value2 = '';
        equalState = false;
    }
    let input = e.target.textContent;
    text = text+input;
    // console.log(text);
    screen.textContent = text;
};


function firstValue(e){
    if(state){
        value2 = parseInt(text);
        answer = operate(value1,value2,operator);
        text = answer;
        screen.textContent = text;
    }
    operator = e.target.textContent;
    if(operator === '+' || operator === '-' || operator === '/' || operator === '*'){
        value1 = parseFloat(text);
        console.log(value1);
        text = '';
        state = true;
    };
    // colorState = true;
    // if(colorState){

    // }

}

function secondValue(e){
    if(e.target.textContent === '='){
        value2 = parseFloat(text);
        // console.log(value2);
        answer = operate(value1,value2,operator);
        text = answer
        screen.textContent = text;
        state = false;
        equalState = true;
        // colorState = false;
        // if(!colorState){

        // }
    }
}

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

ac.addEventListener('click', clear)
// plusMinus.addEventListener('click', display)
// percentage.addEventListener('click', display)
slash.addEventListener('click', firstValue)
star.addEventListener('click', firstValue)
minus.addEventListener('click', firstValue)
plus.addEventListener('click', firstValue)
equals.addEventListener('click', secondValue)
dot.addEventListener('click', display)


// HIGHLIGHT
zero.addEventListener('mousedown', ()=>{
    zero.classList.add('highlight')
})
zero.addEventListener('mouseup', ()=>{
    zero.classList.remove('highlight')
})

one.addEventListener('mousedown', ()=>{
    one.classList.add('highlight')
})
one.addEventListener('mouseup', ()=>{
    one.classList.remove('highlight')
})

two.addEventListener('mousedown', ()=>{
    two.classList.add('highlight')
})
two.addEventListener('mouseup', ()=>{
    two.classList.remove('highlight')
})

three.addEventListener('mousedown', ()=>{
    three.classList.add('highlight')
})
three.addEventListener('mouseup', ()=>{
    three.classList.remove('highlight')
})

four.addEventListener('mousedown', ()=>{
    four.classList.add('highlight')
})
four.addEventListener('mouseup', ()=>{
    four.classList.remove('highlight')
})

five.addEventListener('mousedown', ()=>{
    five.classList.add('highlight')
})
five.addEventListener('mouseup', ()=>{
    five.classList.remove('highlight')
})

six.addEventListener('mousedown', ()=>{
    six.classList.add('highlight')
})
six.addEventListener('mouseup', ()=>{
    six.classList.remove('highlight')
})

seven.addEventListener('mousedown', ()=>{
    seven.classList.add('highlight')
})
seven.addEventListener('mouseup', ()=>{
    seven.classList.remove('highlight')
})

eight.addEventListener('mousedown', ()=>{
    eight.classList.add('highlight')
})
eight.addEventListener('mouseup', ()=>{
    eight.classList.remove('highlight')
})

nine.addEventListener('mousedown', ()=>{
    nine.classList.add('highlight')
})
nine.addEventListener('mouseup', ()=>{
    nine.classList.remove('highlight')
})





ac.addEventListener('mousedown', ()=>{
    ac.classList.add('highlight')
})
ac.addEventListener('mouseup', ()=>{
    ac.classList.remove('highlight')
})

slash.addEventListener('mousedown', ()=>{
    slash.classList.add('highlight')
})
slash.addEventListener('mouseup', ()=>{
    slash.classList.remove('highlight')
})

star.addEventListener('mousedown', ()=>{
    star.classList.add('highlight')
})
star.addEventListener('mouseup', ()=>{
    star.classList.remove('highlight')
})

minus.addEventListener('mousedown', ()=>{
    minus.classList.add('highlight')
})
minus.addEventListener('mouseup', ()=>{
    minus.classList.remove('highlight')
})

plus.addEventListener('mousedown', ()=>{
    plus.classList.add('highlight')
})
plus.addEventListener('mouseup', ()=>{
    plus.classList.remove('highlight')
})

equals.addEventListener('mousedown', ()=>{
    equals.classList.add('highlight')
})
equals.addEventListener('mouseup', ()=>{
    equals.classList.remove('highlight')
})
dot.addEventListener('mousedown', ()=>{
    dot.classList.add('highlight')
})
dot.addEventListener('mouseup', ()=>{
    dot.classList.remove('highlight')
})

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
        case '-':
            return sub(a,b);
        case '*':
            return mul(a,b);
        case '/':
            return div(a,b);   
    }
}




