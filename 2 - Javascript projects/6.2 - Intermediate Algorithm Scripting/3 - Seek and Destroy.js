// N.B.
// console.log(Object.keys(arguments)) sono le "keys" dell'"oggetto argomento" di default, che saranno uguali a [0, 1, 2]
// console.log(Object.values(arguments)) sono i "values" dell'"oggetto argomento" di default, che saranno uguali a [[1, 2, 3, 1, 2, 3], 2, 3]

function destroyer(arr) {

  let arrToDestroy = Object.values(arguments)[0]
  let destroyers = Object.values(arguments).slice(1)

  console.log(arrToDestroy)
  console.log(destroyers)

  let result = [];

  arrToDestroy.map(element => { // itero lungo tutto arrToDestroy, ogni elemento dell'array sarà "element"
    if (destroyers.indexOf(element) === -1) { // se "element" non esiste dentro "destroyers", returnerà -1
      return result.push(element); // a quel punto pushami dentro un nuovo array quell'elemento, ottenendo l'array voluto
    }
  });
  

  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));