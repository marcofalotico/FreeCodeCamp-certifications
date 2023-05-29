function binaryAgent(str) {

    // splitto la stringa in un'array ovunque incontri lo spazio " "
    let binaryArray = str.split(" ");
    let uniString = [];
  
    // itero lungo l'array e trasformo l'i-esimo elemento prima in decimale con parseInt, poi in stringa con String.fromCharCode, e il risultato lo pusho all'interno di un'array vuoto creato all'inizio
    for (let i = 0; i < binaryArray.length; i += 1) {
      uniString.push(String.fromCharCode(parseInt(binaryArray[i], 2)));
    }
  
    // a questo punto, joino lettera con lettera
    return uniString.join("");
  
  }
  
  let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
  console.log(result)