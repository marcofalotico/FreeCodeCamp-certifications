function sumPrimes(num) {

    // creo prima una funzione che controlli se un numero è un numero primo
    let isPrime = (singleNum) => {
      let counter = 2;
      while (counter < singleNum) {
        if (singleNum % counter === 0) {
          return false
        }
        counter += 1;
      }
      return true
    }
  
    let sumPrimeNum = 0;
  
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sumPrimeNum += i;
      }
    }
  
  
    return sumPrimeNum;
  }
  
  console.log(sumPrimes(10));
  
  