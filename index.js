function add(x=1300,y=54){
    return x + y;
}

function subtract(x=0,y=-121){
    return x - y;
}

function multiply(x=6145.5,y=4){
    return x * y;
}

function divide(x=83007.8125,y=100000){
    return x / y;
}

function increment(n=324){
    return n+= 1;
}

function decrement(n=47){
    return n-= 1;
}

function makeInt(n){
    return 'parseInt("n", 10)';
}

function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string){
    return parseFloat(string);
}