'use strict';

var osoba = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function () {
        console.log("Cześć, jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}
/*this - odwołujemy się do imienia znajdującego się w danym obiekcie, na któym pracujemy*/

console.log(osoba.imie);
console.log(osoba.wzrost);
/*ten sposób lepszy, bo brackets podpowiada*/

osoba.imie = "Adam";

console.log(osoba["imie"]);
console.log(osoba["wzrost"]);
/*ale trzeba znać oba*/

osoba.przedstawOsobe(); /*to działa*/

/*console.log(osoba.przedstawOsobe())*/
/*1. wywołuje funkcję przedstawOsobe i daje jej wynik "Cześć" 2. potem musi wywołać console.log i już wtedy nie wie co ma wyświetlić; tak jakby było: console.log(console.log("Cześć"))*/
