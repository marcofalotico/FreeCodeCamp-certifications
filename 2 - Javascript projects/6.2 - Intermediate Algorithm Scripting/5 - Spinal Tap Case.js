function spinalCase(str) {
  
    // prima converto le frasi in camel case e tra le minuscole e maiuscole aggiungo uno spazio
    let camelCaseSentence = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  
    // poi converto lo spazio oppure il trattino basso "_" in "-"
    let spinalCaseSentence = camelCaseSentence.replace(/\s|_/g,"-");  
  
    // infine, uso il metodo che trasforma in lettere minuscole
    return spinalCaseSentence.toLowerCase();
  }
  
  console.log(spinalCase("thisIsSpinalTap"));