// Istruzioni:
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//punto 1://

//creiamo il nostro oggetto studente.
var studente = {
  name: "Luca",
  surname: "Lolli",
  age: "23"
};
// //verifichiamo in console log l'esistenza dell'oggetto.
console.log(studente);
var contenitore;
// //verificata l'esistenza dell'oggetto passiamo a ciclare l'oggetto stesso col ciclo for in
for (var key in studente) {
  console.log(key, studente[key]);
}


// //abbiamo ottenuto in console log tutte le proprietà dell'oggetto.
// //adesso le stampiamo a schermo tramite il nostro h1;
//



//punto 2;

var gruppo = [{

}]
