function pairElement(str) {
  let bases = {
    "A" : ["A", "T"], 
    "T" : ["T", "A"],
    "C" : ["C", "G"],
    "G" : ["G", "C"]
    }
  let result = [];
  let keyBases = [];
  
  for (let key in bases) {
      keyBases.push(key);
    }

  for (let i = 0; i < str.length; i++) {
    let singleLetter = str[i];
    result.push(bases[singleLetter]);
  }

  // oppure, usando map:
  //  str.split("").map(letter => {
  //    result.push(bases[letter]);
  //  })

  return result;
}

let res = pairElement("ATCGA");
console.log(res)