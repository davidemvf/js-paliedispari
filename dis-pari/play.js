// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.

var utente = prompt("Pari o dispari?")
var n_uno = parseInt(1 + Math.random()*5);
var n_due = parseInt(1 + Math.random()*5);
var somma = somma(n_uno, n_due);
var parita = parita(somma);


console.log("Primo numero: ", n_uno);
console.log("Secondo numero: ", n_due);
console.log("Somma: ", somma);
console.log("Pari o dispari?", parita);

if (utente === parita) {
  document.writeln("Hai vinto!");
} else {
  document.writeln("Hai perso!");
}



function somma( n_uno, n_due ){
  var risultato = n_uno + n_due;
  return risultato;

}

function parita(n) {
  var even = "pari";
  if (n % 2 === 0) {
    return even;
  } else {
    even = "dispari"
    return even;
  }

}
