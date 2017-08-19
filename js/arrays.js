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

console.log("**********************");
console.log(zbiorImion.indexOf("Michał"));
/*pod jakim indexem jest dana wartość, pierwszy napotkany element
jak jest -1 to znaczy, że nie ma takiego elementu*/

console.log("**********************");
console.log(Array.isArray(zbiorImion));
/*sprawdza czy zbiorImion jest tablicą*/

console.log("**********************");
console.log(zbiorImion.slice(2, 5));
/*bierze index 2, 3, 4 a 5 już nie bieże => zbior jednostronnie zamknięty <2,5)*/

console.log("**********************");
console.log(zbiorImion);


zbiorImion.splice(2, 3, "Zenek", "Grzesiek", "Ania", 
"Marian"); /*usuwa trzy elementy od indeksu 2*/
console.log(zbiorImion);

/*zbiorImion.splice(2); usuwa wszystko od indexu 2 do końca
console.log(zbiorImion);*/

console.log(zbiorImion.toString()); /*nie można podać czym rozdzielamy*/