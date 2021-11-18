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




