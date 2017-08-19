"use strict";

/*pętla for*/

for (var i = 0; i < 4; i++) {
    console.log(i);
}

var imiona = ["Wojtek", "Adam", "Zenek"];
for (var i = 0; i < imiona.length; i++) {
    console.log(imiona[i]);
}
console.log("*****")
for (var i = 0; i <= imiona.length; i++) {
    console.log(imiona[i]);
}
console.log("*****")
for (var i = 1; i <= imiona.length; i++) {
    console.log(imiona[i]);
}

/*pętla forEach*/
console.log("*****/////")
imiona.forEach(function (element, index) {
    console.log(element)
})


//console.log("*****/////\\\\\")

imiona.forEach(function (element, index) {
    console.log(index + ": " + element)
})

/*pętla while*/
console.log("*****/////\\\\\+++++")

var i = 0;
while (i < 0) {
    console.log(i);
    i++;
}
/*bez i++ wykona się nieskończoną ilość razy bo i jest zawsze < od 3 bo jest = 0*/

/*pętla do while*/

var j = 10;
do {
    console.log(j);
    j++;
} while (j < 10)
/*warunek jest sprawdzany na końcu więc przynajmniej 1 obieg jest zrobiony zawsze*/

console.log("*****/////***\\\\\+++++")
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("i: " + i + " j: " + j);
    }
}

console.log("*****/////***\\\\\+++++")
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("i: " + i + " j: " + j);
        break;
    }
}
console.log("Koniec")


/*continue*/

console.log("*****mmmmmm+++++")
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("i: " + i + " j: " + j);
        if (j % 2 == 0) {
            continue;
        }
        console.log("Koniec obiegu");
        console.log("Koniec obiegu1");
        console.log("Koniec obiegu2");
        console.log("Koniec obiegu3");
    }
}
