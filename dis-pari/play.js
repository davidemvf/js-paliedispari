// L’utente sceglie pari o dispari.
// Generiamo due numeri random (da 1 a 5) e dichiariamo chi ha vinto.


// Creo variabili per la scelta pari o dispari da parte dell'utente, definisco le due variabili con un valore random da 1 a 5
var utente = prompt("Pari o dispari?")
var n_uno = parseInt(1 + Math.random()*5);
var n_due = parseInt(1 + Math.random()*5);

// richiamo le due funzioni tramite variabili: la prima somma i numeri, la seconda verifica la parità della somma;
var somma = somma(n_uno, n_due);
var parita = parita(somma);

// visualizzo tramite console i numeri usciti, la loro somma e la parità di quest'ultima;
console.log("Primo numero: ", n_uno);
console.log("Secondo numero: ", n_due);
console.log("Somma: ", somma);
console.log("Pari o dispari?", parita);

// definisco le condizioni di vittoria e sconfitta e visualizzo il risultato;
if (utente === parita) {
  document.writeln("Hai vinto!");
} else {
  document.writeln("Hai perso!");
}

// funzioni utilizzate:
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
