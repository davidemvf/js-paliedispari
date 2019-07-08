// funzione per capire se la parola è palindroma

// Dò la possibilità all'utente di inserire la parola e richiamo la funzione
var parola = prompt("Inserisci la parola");
palindromo(parola);


// espressione della funzione
function palindromo(str){

  if (str.replace(/ /g,"") === reverse(str.replace(/ /g, ""))) {                 //impongo la condizione di uguaglianza delle due stringhe (originale e inversa), eliminando gli spazi vuoti
    document.writeln("La parola inserita è un palindromo");
} else {
    document.writeln("La parola inserita non è un palindromo");
}

  function reverse(str) {                                                        //funzione creata per invertire la parola/frase inserita dall'utente
    return str.split("").reverse().join("");
  }
}
