const VALUTE = [
  ["PENNY", 1], ["NICKEL", 5], 
  ["DIME", 10], ["QUARTER", 25], ["ONE", 100], 
  ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
];
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round(cash * 100) - Math.round(price * 100);
  let cashOnHand = {};
  let cashToGive = {};

  cid.map(nomiValute => {
    cashOnHand[nomiValute[0]] = Math.round(nomiValute[1] * 100);
  }) // creo un oggetto con stesse chiavi di fondoCassa, contenente il valore di fondoCassa * 100 arrotondato

  let index = VALUTE.length - 1;
  while (index >= 0 && amountToReturn > 0) { 
    let moneyName = VALUTE[index][0];
    let moneyValue = VALUTE[index][1];
    
    if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn) { 
      cashToGive[moneyName] = 0;

      // console.log("All'inizio, in cassa ho",cashOnHand[moneyName], moneyName,". Ne devo restituire", amountToReturn," perchè in mano ho" , cashToGive[moneyName])

      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue; // diminuisco i soldi in cassa
        cashToGive[moneyName] += moneyValue; // aumento i soldi in mano
        amountToReturn -= moneyValue; // diminuisco il resto da dare
      }
      // console.log("Adesso in cassa ho",cashOnHand[moneyName], moneyName,". Ne devo restituire", amountToReturn,"perchè in mano ne ho" , cashToGive[moneyName])
    }
    index -= 1;
  }

  if (amountToReturn === 0) { // se non ho più soldi da dare al cliente returna "{status: "OPEN", change: changeArray}"
    let isRegisterEmpty = true;
    Object.keys(cashOnHand).map(moneyType => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterEmpty = false;
      }
    })

    console.log(isRegisterEmpty)
    
    if (isRegisterEmpty) {
      return {
        status: "CLOSED",
        change: cid
      }
    } else {
      let changeArray = [];
      Object.keys(cashToGive).map(moneyType => {
        if (cashToGive[moneyType] >0){
          changeArray.push([moneyType, cashToGive[moneyType] / 100])
        }
      });
      return {status: "OPEN", change: changeArray}
    }
  }
    
    
  return {status: "INSUFFICIENT_FUNDS", change: []}
}
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
let cid = [
  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
  ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

let result = checkCashRegister(19.5, 20, cid);
console.log(result);