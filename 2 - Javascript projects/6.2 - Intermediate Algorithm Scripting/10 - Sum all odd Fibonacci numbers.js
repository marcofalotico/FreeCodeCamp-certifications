function sumFibs(num) {

    let fibonacciSequence = [0, 1];
    let sumOddFibonacciSequence = 1;
  
    // somma tra n-2 e n-1 numero della sequenza
    let counter = fibonacciSequence[fibonacciSequence.length -2] +
                  fibonacciSequence[fibonacciSequence.length -1];
    
    // il counter si incrementa fino a num, ma fino ad allora:
    while (counter <= num) {
  
      // inserisci il counter nella sequenza
      fibonacciSequence.push(counter);
  
      // fa la somma tra quelli dispari
      if (counter % 2 != 0) {sumOddFibonacciSequence += counter}
  
      // incrementa il counter
      counter = fibonacciSequence[fibonacciSequence.length -2] +
                fibonacciSequence[fibonacciSequence.length -1];
    }
  
    // +1
    return sumOddFibonacciSequence;
  }
  
  let result = sumFibs(75025);
  
  console.log(result)