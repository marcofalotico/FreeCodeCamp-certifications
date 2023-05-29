function truthCheck(collection, pre) {
  let answer = true;

  // itera lungo tutto l'array "collection"
  for (let i = 0; i < collection.length; i += 1) {
    console.log(collection[i][pre]);
    
    // se incontro una casistica che in contesto Booleano significa "false", allora returna false. 
    if (collection[i][pre] === 0 ||
        collection[i][pre] === "" ||
        collection[i][pre] === undefined ||
        collection[i][pre] === null ||
        collection[i][pre] === false ||
        Number.isNaN(collection[i][pre])
        ) {
      return false
    }

  }
  // altrimenti returna true
  return answer
}

let result = truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number");

console.log(result)


// oppure, un'altra soluzione sarebbe usare .every(). 
// Infatti .every() ha come argomento una funzione che ritorna implicitamente vero o falso: essendo quei parametri (null, undefined, ecc) già catalogati come falsy value in javascript, ecco che se prendo il dataPoint[pre] il metodo every restituirà già se si tratta di un truthy o falsy value.

// function truthCheck(collection, pre) {
//  return collection.every(function(dataPoint){
//    return dataPoint[pre]
//  });
// }