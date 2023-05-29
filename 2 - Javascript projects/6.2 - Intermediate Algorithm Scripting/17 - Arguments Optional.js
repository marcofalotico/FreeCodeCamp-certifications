// creo una funzione esterna che mi controlli se l'argomento passato è "number", altrimenti returna undefined
let isNumber = (argument) => {
  if (typeof argument === "number") {
    return argument;
  } else return undefined
}

function addTogether() {
  // Object.values(arguments)[0] è come scrivere arguments[0]

  let firstArgument = arguments[0];

  // se vengono passati + di 1 argomento mi salvo il secondo argomento
  if (arguments.length > 1) {
    let secondArgument = arguments[1];

    // se entrambi gli argomenti sono del tipo "number", returna la somma, altrimenti returna undefined
    if (isNumber(firstArgument) !== undefined &&
        isNumber(secondArgument) !== undefined) {
          return firstArgument + secondArgument
        } else {
          return undefined;
        }

  // se viene passato un solo argomento e non è di tipo "number" returna direttamente undefined
  } else if (arguments.length === 1) {
    if (isNumber(firstArgument) === undefined) {
      return undefined

      // altrimenti se il primo argomento è di tipo "number" ritorna una funzione che in sostanza fa le stesse cose della casistica con due argomenti: controlla se entrambi sono di tipo number e, se si, returna la somma, altrimenti returna undefined
    } else return function (secondArgument) {
      if (isNumber(firstArgument) !== undefined &&
        isNumber(secondArgument) !== undefined) {
          return firstArgument + secondArgument
        } else {
          return undefined;
        }
    }
  }

}

let result = addTogether(2, 3);
console.log(result)