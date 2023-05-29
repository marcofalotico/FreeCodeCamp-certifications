// Only change code below this line
function urlSlug(title) {

    // creo un copia del titolo con .slice(), rendo le parole minuscole e le splitto in un array con .split() ogni volta che trova uno spazio
    let titleDividedIntoLowercaseWord = title.slice().toLowerCase().split(" ");
  
    // filtro il nuovo array col metodo .filter(), dove tutte le parole diverse da empty string "" saranno ritornate (così da eliminare spazi superflui)
    let filteredTitle = titleDividedIntoLowercaseWord.filter(word => {
      if (word != "") {
        return word;
      }
    })
  
    // a questo punto, ritornerò la stringa filtrata, minuscola e che si trova in un array di parole, unita col metodo .join(), unita con un "-" tra ogni parola
    return filteredTitle.join("-");
  
  }
  // Only change code above this line
  
  console.log(urlSlug(" Winter Is  Coming"));