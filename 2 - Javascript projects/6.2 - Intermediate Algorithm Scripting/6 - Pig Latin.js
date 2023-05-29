function translatePigLatin(str) {

    // mi salvo le vocali in un array di lettere (le vocali) creato con .split()
    let vowels = "aeiou".split(""); 
  
    // itero lungo str:
    for (let i = 0; i < str.length; i += 1) {
  
      // se la parola inizia (i===0) con una vocale (quindi esiste nell'array di vocali, dunque returnerà != -1), allora aggiungi "way"
      if (vowels.indexOf(str[i]) !== -1 && i === 0) {
        return str + "way"
      }
      // mentre itero, appena incontro una vocale (.indexOf() returnerà != -1)), allora copiami la parola dalla vocale in poi, aggiungendo le prime consonanti in mezzo, terminando con "ay"
      if (vowels.indexOf(str[i]) !== -1){
        return (str.slice(i) + str.slice(0, i) + "ay");
      }
    }
  
    // se l'iter non troverà mai vocali, aggiungi semplicemente "ay"
    return str + "ay";
  }
  
  let result = translatePigLatin("glove");
  console.log(result)