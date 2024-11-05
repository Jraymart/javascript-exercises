const convertToCelsius = function(fahrenheit) {
  //celsius formula -> (n - 32) * (5/9) * C
  return Math.round(((fahrenheit-32)*(5/9))*10)/10;
};

const convertToFahrenheit = function(celsius) {
  //fahrenheit formula -> (n * 9/5 + 32)* F
  Math.round(((fahrenheit*(5/9))+32 )*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
