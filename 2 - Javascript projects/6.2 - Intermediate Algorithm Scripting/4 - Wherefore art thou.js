function whatIsInAName(collection, source) {
    console.log(collection)
    console.log(source)
  
    const arr = [];
  
    for (let i = 0; i < collection.length; i++) {
      let found = true;
      for (const sourceKey in source) {
        console.log(collection[i][sourceKey], source[sourceKey])
        if (collection[i][sourceKey] !== source[sourceKey]) {
          found = false;
          break;
        }
      }
      if (found) arr.push(collection[i]);
    }
  
    return arr;
  }
  
  let result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  console.log(result);