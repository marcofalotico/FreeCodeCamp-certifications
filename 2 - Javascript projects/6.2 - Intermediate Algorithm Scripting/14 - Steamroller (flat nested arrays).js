function steamrollArray(arr) {

    // usando concat faccio passare tutti gli array di 1 ordine dentro un array vuoto "flat", quindi li rendo flat 1 volta per via dello spread operator
    const answer = [].concat(...arr);
  
    // uso il metodo .some(), per cui se qualcuno degli elementi dell'array è un array, allora lo appiatisco con la recursion, applicando la funzione non più su arr ma su answer
    return answer.some(Array.isArray) ? steamrollArray(answer) : answer;
  }
  
  let result = steamrollArray([1, [2], [3, [[4]]]]);
  
  console.log(result)