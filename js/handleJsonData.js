var totalCasesWorld = 0;
fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    Object.keys(data)[0];
    for(o in data){
      var keys = Object.keys(data[o.toString()])
      var latestIndex = keys[keys.length - 1]
      var confirmedCases = keys[latestIndex];
      console.log(confirmedCases);
    }
  });
