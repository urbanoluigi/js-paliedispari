// Questo è il file che contiene tutto il codice JS della pagina web

//Palidroma

/*Chiedere all’utente di inserire una parola. Creare una funzione per
capire se la parola inserita è palindroma. Usate poi la funzione per
decretare se la parola inserita dall'utente è palindroma o meno.
In Internet trovate degli esempi di parole palindrome.*/

/*var parola=prompt("Inserire una parola: "), prova="";
  for (l=parola.length-1; l>=0; l--)
  {
   document.write(parola.charAt(l)); //Stampo le lettere invertite al fine di vedere se è giusto il procedimento
   prova+=parola.charAt(l); 
  }
  if(parola == prova)
   document.write("La parola e' palindroma </br>");
  else
   document.write("La parola non e' palindroma </br>");*/

//----------------------2nd esercizio------------------------------//

   //Pari e Dispari

   /*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   Generiamo un numero random (sempre da 1 a 5) per il computer
   (usando una funzione). Sommiamo i due numeri Stabiliamo se la
   somma dei due numeri è pari o dispari (usando una funzione).
   Dichiariamo chi ha vinto.*/

   /*function isEven(number) {
    return number % 2 === 0;
}

function determineWinner(userChoice, userNumber, computerNumber) {
    const total = userNumber + computerNumber;
    const sumIsEven = isEven(total);

    console.log(`hai scelto ${userChoice} e ${userNumber}.`);
    console.log(`il computer ha scelto ${computerNumber}.`);
    console.log(`la somma totale è: ${total}`);

    if ((userChoice === 'pari' && sumIsEven) || (userChoice === 'dispari' && !sumIsEven)) {
        console.log("hai vinto!");
    } else {
        console.log("il computer ha vinto");
    }
}

function main() {
    const userChoice = prompt("scegli pari o dispari: ").toLowerCase();
    const userNumber = parseInt(prompt("inserisci un numero da 1 a 5:"));

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        console.log("Inserisci un numero valido compreso tra 1 e 5.");
        return;
    }

    const computerNumber = Math.floor(Math.random() * 5) + 1;

    determineWinner(userChoice, userNumber, computerNumber);
}

// avvia il programma
main();*/
