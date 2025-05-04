// Math.round(num * 10) / 10 Rounds number to one decimal point
// Farenheit to celsius formula C = (F-32) * (5/9)
// °F = (°C * 9/5) + 32. 

const convertToCelsius = function(farenheitNum) {
  let celsius = (farenheitNum - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius; 
};

const convertToFahrenheit = function(celsiusNum) {
  let farenheit = (celsiusNum * (9/5) + 32);
  farenheit = Math.round(farenheit * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
