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
// console.log(studente);
var contenitore = "";
// //verificata l'esistenza dell'oggetto passiamo a ciclare l'oggetto stesso col ciclo for in
for (var key in studente) {
// console.log(studente[key]);
  // console.log(key, studente[key]);
  contenitore += studente[key] + " ";
  // console.log(contenitore);
}

// //abbiamo ottenuto in console log tutte le proprietà dell'oggetto.
// //adesso le stampiamo a schermo tramite il nostro h1;
document.getElementById('stampa').innerHTML = contenitore;

//punto 2;
//creare un array di oggetti di studenti;
var gruppoStudenti = [

  {
    name: "Marco",
    surname: "Gatti",
    age: 22
  },
  {
    name: "Luca",
    surname: "Lolli",
    age: 24
  },
  {
    name: "Carlo",
    surname: "Pari",
    age: 26
  },

];
//cicliamo su tutti gli studenti e stampiamo per ognuno nome e cognome;
// console.log(gruppoStudenti);
//verificata l'esistenza del ns array andiamo a fare un ciclo for  e cerchiamo i valori che ci interessano;

contenitore2 = "";
for (var i = 0; i < gruppoStudenti.length; i++) {
  contenitore2 += gruppoStudenti[i].name + " " + gruppoStudenti[i].surname + "<br>";
  // console.log(contenitore2);
}



document.getElementById("stampa2").innerHTML = contenitore2;

//a questo punto tramite tre variabili prompt prendiamo dei valori e inseriamoli in un nuovo oggetto nel nostro array.

var newName = prompt("Qual'è il tuo nome?");
var newSurname = prompt("qual'è il tuo cognome?");
var newAge = Number(prompt("quanti anni hai?"));

// creiamo un nuovo oggetto
newStudent = {};

newStudent.name = newName;
newStudent.surname = newSurname;
newStudent.age = newAge;

// newStudent = {
//   name: newName,
//   surname: newSurname,
//   age: newAge
// }

gruppoStudenti.push(newStudent);

console.log(gruppoStudenti);
