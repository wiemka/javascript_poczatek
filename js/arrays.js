'use strict';

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow = imiona.push("Geralt", "Magda");
console.log(imiona);
console.log(ileElementow);

/*push zwraca ilość elementów w tablicy*/

var usunietyElement = imiona.pop();
console.log(imiona);
console.log(usunietyElement);

/*pop zwraca element usunięty/zdejmowany*/

console.log(imiona.unshift("Robert"))
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log("Ilość elementów w tablicy: " + imiona.length);

var imie = "Adam";
console.log(imie.length);
console.log(imie[0]);

console.log("**********************");
console.log(imiona); /*tablica*/
console.log(imiona.join()); /*tablica jako string*/
console.log(imiona.join(" - ")); /*tablica jako string rozdzielona spacją*/
console.log(imiona.join(" + ")); /*tablica jako string rozdzielona plusem*/

console.log("**********************");
console.log(imiona.reverse())

console.log("**********************");
imiona.sort();
console.log(imiona);

var imionaMeskie = ["Wojtek", "Michał", "Mikołaj"];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona męskie: " + imionaMeskie.join(", "));
