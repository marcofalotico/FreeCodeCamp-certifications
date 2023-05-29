function palindrome(str) {

  let polishedStr = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedStr = polishedStr.split("").reverse().join("");
  console.log(polishedStr, reversedStr)

  if (polishedStr != reversedStr) {
    return false
  }


  return true;
}

let result = palindrome("eye_");
console.log(result)