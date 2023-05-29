// creo una funzione che crea un range di tutti i numeri compresi tra quello più piccolo e quello più grande
let getRange = (lowN, highN) => {
    let resultRange = [];
    for (let i = lowN; i <= highN; i += 1){
      resultRange.push(i);
    }
    return resultRange;
  }


function smallestCommons(arr) {
  let lowestNum, highestNum;
  // trova il num più piccolo e il num più grande tra i due numeri di "arr"
  if (arr[0] > arr[1]) {
    lowestNum = arr[1];
    highestNum = arr[0];
  } else {
    lowestNum = arr[0];
    highestNum = arr[1];
  }

  // uso la funzione getRange tra lowestNum e highestNum
  let range = getRange(lowestNum, highestNum);
  let smallestCommonMultiple = 0;

  let counter = 1;
  while(counter < Infinity) {
    // moltiplico i due estremi dell'array con un contatore che va da 1 a, potenzialmente, infinito. Ottengo dunque il Massimo comune multiplo. 
    // Di questo massimo, devo trovare il più piccolo numero che è divisibile per gli estremi e tutto il range intermezzo (per il range, in sostanza)
    let higherCommonMultiple = ((counter * lowestNum) * highestNum);

    // creo una variabile "trueCount" che si incrementerà soltanto quando il resto della divisione sarà nullo, quindi quando la divisione intera esiste.
    let trueCount = 0;
    for (let i = 0; i < range.length; i++) {
      if (higherCommonMultiple % range[i] === 0) {
        trueCount += 1;
      }

      // quando il "trueCount" raggiunge la lunghezza del range, quindi higherCommonMultiple è divisibile per tutti i numeri compresi nel range, allora ho trovato lo "smallestCommonMultiple"
      if (trueCount === range.length) {
        smallestCommonMultiple = higherCommonMultiple;
        return smallestCommonMultiple;
      }
    }
    counter += 1;
  }

}

let result = smallestCommons([1,5]);
console.log(result);
