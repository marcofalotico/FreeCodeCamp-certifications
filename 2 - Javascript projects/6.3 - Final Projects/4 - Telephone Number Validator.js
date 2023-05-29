function telephoneCheck(str) {

    // https://regex101.com/ per fare i regex
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
    return regex.test(str);
  }
  
  let result = telephoneCheck("555-555-5555");
  console.log(result)