function myReplace(str, before, after) {

  // suddividi la stringa in un array di singole parole
  let singleWordArr = str.split(" ");

  // itera lungo l'array di singole parole
  for ( let i = 0; i < singleWordArr.length; i++) {

    // se la i-esima parola è uguale al primo argomento "before", allora fai un replace (riga 16)
    if (singleWordArr[i] === before) {
      console.log(singleWordArr)
      // se la prima lettera della i-esima parola è maiuscola come la prima lettera di before
      if (singleWordArr[i][0] === singleWordArr[i][0].toUpperCase()) {
        // allora trasforma in maiuscola anche la prima lettera di after
        after = after[0].toUpperCase() + after.slice(1);

        // altrimenti, se la prima lettera della i-esima parola è minuscola come la prima lettera di before
      } else if (singleWordArr[i][0] === singleWordArr[i][0].toLowerCase()) {
        //allora trasforma in minuscola anche la prima lettera di after
        after = after[0].toLowerCase() + after.slice(1);
      }
      singleWordArr[i] = after;
    }
  }

  return singleWordArr.join(" ");
}

let result = myReplace("I think we should look up there", "up", "Down");

console.log(result)