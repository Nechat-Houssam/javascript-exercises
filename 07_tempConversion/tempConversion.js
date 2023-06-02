const convertToCelsius = function(x) {

      let num = ((x - 32) * (5/9));

      if ( num % 1 == 0)
         return num

      else 
         return parseFloat(num.toFixed(1));
};

const convertToFahrenheit = function(x) {

      let num = (x * (9/5) + 32);

      if ( num % 1 == 0)
         return num

      else 
         return parseFloat(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
