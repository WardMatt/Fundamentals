/*
 * Conditionals, Functions, Scope and Loops
 */

//Equals
let equals = 1 === 1;
/*console.log(equals)*/

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40



function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA <storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their Prices are equal")
    }
}

//compareStorePrices(10,5);
//compareStorePrices(5,10);

function squareNum (number) {
    return number * number
}

let squaredNum = squareNum(4);
console.log(squaredNum);

let x = 10;
function addNumbers (n,m,x){
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
addNumbers (2,3,15);
console.log(addNumbers(2,3,5));

let ourArray = [1,2,3,4,5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i)
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++){
        console.log("j is equal to: " + j);
    }
}

let xx=0;
while(xx < 3) {
    console.log("Ran");
    xx = xx + 1;
}

