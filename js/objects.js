'use strict';

/*var wojtek = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function () {
        console.log("Cześć, jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}

var kaja = {
    imie: "Kaja",
    wzrost: 160,
    przedstawOsobe: function () {
        console.log("Cześć, jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}
/*this - odwołujemy się do imienia znajdującego się w danym obiekcie, na któym pracujemy*/

/*console.log(wojtek.imie);
console.log(wojtek.wzrost);
/*ten sposób lepszy, bo brackets podpowiada*/

/*wojtek.imie = "Adam";

console.log(wojtek["imie"]);
console.log(wojtek["wzrost"]);
/*ale trzeba znać oba*/

/*wojtek.przedstawOsobe(); /*to działa*/

/*console.log(osoba.przedstawOsobe())*/
/*1. wywołuje funkcję przedstawOsobe i daje jej wynik "Cześć" 2. potem musi wywołać console.log i już wtedy nie wie co ma wyświetlić; tak jakby było: console.log(console.log("Cześć"))*/

/*console.log(kaja.imie);
console.log(kaja.wzrost);

/*kaja.przedstawOsobe(); */


class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
        this.waga = "nie Twój interes";
    }
    /*wstawiam funkcję w klasie Osoba*/
    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n" +
            "Nazwisko: " + this.nazwisko + "\n" +
            "Wzrost: " + this.wzrost + "\n" +
            "Oczy: " + this.oczy + "\n" +
            "Waga: " + this.waga)
    }
}

var wojtek = new Osoba("Wojtek", "Potocki");
var magda = new Osoba("Magda", "Wielgosz");

wojtek.wzrost = 180;
wojtek.oczy = "niebieskie";

magda.wzrost = 173;
magda.oczy = "piwne";

//console.log(wojtek);
//console.log(magda);

wojtek.wyswietlInfo();
magda.wyswietlInfo();
