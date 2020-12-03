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
//verificata l'esistenza del ns array andiamo a fare un ciclo for in e cerchiamo i valori che ci interessano;

contenitore2 = " ";
for (var key in gruppoStudenti) {
  console.log(gruppoStudenti[key].name, gruppoStudenti[key].surname);
  contenitore2 += gruppoStudenti[key].name + " " + gruppoStudenti[key].surname + "<br>";
}

document.getElementById("stampa2").innerHTML = contenitore2;
