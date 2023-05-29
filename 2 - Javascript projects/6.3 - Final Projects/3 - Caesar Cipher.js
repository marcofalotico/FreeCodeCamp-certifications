function rot13(str) {
  let decodedAlphabet = "";
  let startAlphabet = "abcdefghijklm".toUpperCase();
  let endAlphabet = "nopqrstuvwxyz".toUpperCase();

  // itera lungo tutta la lunghezza della stringa passata come argomento:
  for (let i = 0; i < str.length; i += 1) {
    
    // se la lettera si trova nello "startAlphabet", salvami la posizione a cui si trova e metti la lettera corrispondente a quell'indice dello "endAlphabet" nella frase finale "decodedAlphabet"
    if (startAlphabet.indexOf(str[i]) != -1) {
      let counter = startAlphabet.indexOf(str[i]);
      decodedAlphabet += endAlphabet[counter];

      // altrimenti, se la lettera si trova nello "endAlphabet", salvami la posizione a cui si trova e metti la lettera corrispondente a quell'indice dello "startAlphabet" nella frase finale "decodedAlphabet"
    } else if (endAlphabet.indexOf(str[i]) != -1) {
      let counter = endAlphabet.indexOf(str[i]);
      decodedAlphabet += startAlphabet[counter];

      // altrimenti, se la lettera è un carattere diverso da tutti i caratteri opposti agli alfanumerici (quindi punteggiatura, ecc...), salvami quel carattere nella frase finale
    } else if (str[i] != /\W/) {
      decodedAlphabet += str[i]
    }
  }

  return decodedAlphabet;
}

let result = rot13("SERR CVMMN!");
console.log(result)