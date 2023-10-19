var tall = 3;

if (tall === 5) {
    console.log("Tallet er 5");
} else {
    console.log("Tallet er ikkje 5");
};

function fahrenheitTilCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
var grader = fahrenheitTilCelsius(77);

var handleliste = ["melk", "egg", "smør", "toalettpapir", "brus", "epler", "bananer"]

for(var i = 0; i < handleliste.length; i++) {
    console.log(handleliste[i])
}