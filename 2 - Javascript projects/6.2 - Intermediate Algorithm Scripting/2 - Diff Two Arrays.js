function diffArray(arr1, arr2) {

  const newArr = [];
  
  // itera ogni elemento in arr1 per tutta la sua lunghezza
  for (let i = 0; i < arr1.length; i++) {

    // se l'elemento di arr1[i] è presente in arr2, tramite indexOf avrò il suo indice
    // altrimenti, se non esiste, ritornerà = -1. A questo punto, lo pusho nel newArr.
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  // Questo finchè l'elemento mancante sta in arr1, ma se stesse in arr2 ?
  // Rifaccio lo stesso procedimento, invertendo arr1 con arr2 e inserendo un nuovo indice j.

  // itero tutta la lunghezza di arr2, che sarà diventato l'array più lungo e cerco se l'elemento j-esimo di arr2 è contenuto in arr1: se non lo sarà verrà ritornato = -1 con il metodo indexOf, e dunque lo pusho nel nuovo array newArr.
  
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));