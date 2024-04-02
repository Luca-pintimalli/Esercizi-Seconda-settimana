/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*I principali datatype in JavaScript si dividono in : primitivi e complessi.
I primitivi sono: - Numeri: Sono i classici numeri, possono essere interi o decimali.
                  - Stringhe: Sono sequenze di caratteri ( lettere, numeri, spazi, simboli e altri caratteri speciali) racchiusi tra ('') o (""). L'unica regola è quella che il delimitatore deve essere lo stesso , quindi se apri con (') devi chiudere con (') e non con ("")
                  - Booleani: E' un tipo di dato che può avere solo due valori :Vero o falso, rappresentano la presenza o l'assenza di una condizione.
                  - Null:Ha un solo valore (null) 
                  - Undefined: un valore che non esiste.
Complessi: - Gli oggetti : Consente di rappresentare e organizzare dati, sono costituiti da un insieme di proprietà, dove ogni proprietà ha un nome e un valore associato                


*/

/////////////////////////////////////////////////////////////////////

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

//Posso scriverlo in 3 modi:

// var myName="luca";

// let myName="luca";

// const myName="luca";

//Le variabili con var o let posso essere modificate, le variabili con const non possono essere modificate.






/////////////////////////////////////////////////////////////////////


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let risultato = 12 + 20;
console.log("Il risultato dell'addizione è: " + risultato);

in questo caso il nome della varabile è: risultato.
grazie a console.log ho la possibilità di vedere a schermo il risultato dell'addizione. 



*/



/////////////////////////////////////////////////////////////////////


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*
let x = 12;

// -x è il nome della variabile
// -12 è il numero che abbiamo assegnato alla variabile , è un tipo di dato numerico.




/////////////////////////////////////////////////////////////////////


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

const myName="Pintimalli" ;

myName= "luca" ; 

*/

// Una volta aperta la console degli strumenti mi genera un errore tipo : Uncaught TypeError: Assignment to constant variable. at D1.js:102:7





/////////////////////////////////////////////////////////////////////


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let risultato= 4 - x ;
console.log("il risultato della sottrazione è: " + risultato)





/////////////////////////////////////////////////////////////////////


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john" ; 
let name2 = "Jhon" ; 

//verifico che name1 è diverso da name2
console.log(name1 !== name2) ; //Output: true
//verifico la loro uguaglianza tramite il metodo toLowerCase
console.log(name1.toLowerCase() === name2.toLowerCase()); // Output: true (esce false)
