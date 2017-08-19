'use strict';

/*typ liczobowy*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata = "Zarabiam " + (wyplata + premia);

/*jak w matematyce, zawsze od lewej, nawiasy robi najpierw, zajebiste :) */

console.log(calkowitaWyplata);

/*typ łańcuch znaków - string (łańcuch znaków)*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr = "Zarabiam " + wyplataStr + " " + premiaStr;
/*konkatenacja stringów tj. łączenie ciągów znaków*/

console.log(calkowitaWyplataStr);

/*typ logiczny - boolean*/

var smog = false;

console.log(smog);

/*typ specjalny - undefined / null*/

var niezdefiniowanaZmienna;

var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);
