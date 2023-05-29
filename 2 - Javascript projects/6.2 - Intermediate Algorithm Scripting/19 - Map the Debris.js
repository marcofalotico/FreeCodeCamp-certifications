function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // creo l'array da resultare alla fine, con tutti gli oggetti i-esimi dentro
  let orbitalPeriodResult = []

  // itero lungo l'array passato
  arr.map(dataPoint => {
    // creo un oggetto nuovo, che avrà name e orbitalPeriod come "keys and values"
    let translatedDataPoint = {};

    // calcoli
    let twoTimesPi = 2 * Math.PI;
    let a = earthRadius + dataPoint.avgAlt;
    let aCube = Math.pow(a, 3);
    let numberToSquare = aCube / GM;
    let squaredNumber = Math.sqrt(numberToSquare)
    let orbitalPeriod = twoTimesPi * squaredNumber;

    // aggiungo i "keys and values al nuovo oggetto"
    translatedDataPoint.name = dataPoint.name
    translatedDataPoint.orbitalPeriod = Math.round(orbitalPeriod);

    // pusho gli i-esimi oggetti all'interno dell'array vuoto, che verrà returnato
    orbitalPeriodResult.push(translatedDataPoint)
  })
  return orbitalPeriodResult;
}

let result = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

console.log(result)