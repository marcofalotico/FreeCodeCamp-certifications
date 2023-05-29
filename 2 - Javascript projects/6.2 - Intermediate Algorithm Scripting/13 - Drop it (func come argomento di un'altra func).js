function dropElements(arr, func) {
    let result = [];
  
    // itera lungo l'array "arr"
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i], func(arr[i]), arr.slice(i))
  
      // se l'n-esimo numero all'interno di "arr", che diventerà "n", soddisfa la funzione "func", ovvero returnerà === true, copiami l'array "arr" da li in poi
      if (func(arr[i])) {
        return arr.slice(i)
      }
    }
  
    // altrimenti returna result, ovvero un'array vuoto
    return result;
  }
  
  let result = dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
  
  console.log(result)