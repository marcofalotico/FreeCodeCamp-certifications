const Person = function(firstAndLast) {
  // questo constructor "Person" ha 6 chiavi, tutte delle funzioni (e quindi metodi).

  // questo primo metodo getFullName returna l'intero argomento che si passa quando si crea l'oggetto con "new"
  this.getFullName = function() {
    return firstAndLast;
  };

  // questo secondo metodo returna solo il primo elemento splittato dallo spazio, cioè il Nome
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };

  // questo terzo metodo returna solo il secondo elemento splittato dallo spazio, cioè il Cognome
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };


  // da questo quarto metodo (o quarta chiave) in poi, settiamo nuovi nomi interi, nomi o cognomi singoli:

  // qui settiamo un nuovo nome intero, andando a sostituire al "firstAndLast" precedentemente ottenuto con un "newFullName", argomento di quando si andrà a chiamare il metodo setFullName
  this.setFullName = function(newFullName) {
    return firstAndLast = newFullName;
  };

  // qui settiamo un nuovo nome, lasciando invariato il cognome. Quindi quando usiamo questo metodo salvo il nuovo argomento e lo sostituisco al nome vecchio, lasciando il resto invariato
  this.setFirstName = function(newFirstName) {
    return firstAndLast = newFirstName + " " + this.getLastName();
  };

  // viceversa con il cognome, in cui lasciamo intatto il nome e sostituiamo solo il cognome
  this.setLastName = function(newLastName) {
    return firstAndLast = this.getFirstName() + " " + newLastName;
  };


};

const bob = new Person('Bob Ross');

// decommenta per provare uno a uno i 6 metodi di "bob", oggetto creato con il constructor "Person" che contiene le 6 chiavi che sono a loro volta dei metodi.

// console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.setFullName('Marco Falotico'))
// console.log(bob.setLastName("Falotico"))

console.log(bob.getFullName())