'use strict';

function multiply(param1, param2, param3) {
    var result = param1 * param2 * param3;
    console.log(result);
}

multiply(3, 9, 10);
multiply(1, 9, 10);
multiply(3, 9, 0);
multiply(3, 9, 1);


function multiply(param1, param2, param3) {
    var result = param1 * param2 * param3;
    return result;
}

var wynik = multiply(3, 9, 5);
console.log(wynik);