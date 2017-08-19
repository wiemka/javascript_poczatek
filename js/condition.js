'use strict';

var wzrostMateusz = 190;
var wzrostOlga = 190;

/*warunek if*/

if (wzrostOlga < wzrostMateusz) {
    console.log("Olga jest niższa");
}

/*warunek if else*/

if (wzrostOlga < wzrostMateusz) {
    console.log("Olga jest niższe");
} else {
    console.log("Olga jest wyższa")
}


if (wzrostOlga < wzrostMateusz || true) {
    console.log("Olga jest niższe");
} else {
    console.log("Olga jest wyższa")
}

if (wzrostOlga < wzrostMateusz && true) {
    console.log("Olga jest niższe");
} else {
    console.log("Olga jest wyższa")
}


/*warunek if else if*/

console.log("**********")

if (wzrostOlga < wzrostMateusz) {
    console.log("Olga jest niższe");
} else if (wzrostOlga == wzrostMateusz) {
    console.log("Olga tak wysoka jak Mateusz :)")
} else {
    console.log("Olga jest wyższa")
}

/*warunek switch*/

var kolor = 'niebieski';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony');
        break;
    case 'zielony':
        console.log('kolor zielony');
        break;
    case 'niebieski':
        console.log('kolor niebieski');
        break;
    default:
        console.log('inny kolor')
}
/*bez break'a pokazuje wszystkie casy od tego, który jest spełniony*/