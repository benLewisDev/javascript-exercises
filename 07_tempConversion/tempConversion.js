const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = ((tempFahrenheit - 32) / 1.8).toFixed(1);
  let converted = parseFloat(tempCelsius)
  return converted
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = ((tempCelsius * 1.8) + 32).toFixed(1);
  let converted = parseFloat(tempFahrenheit)
  return converted
};

console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
