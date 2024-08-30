const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length(); i++){
    sum += i;
  }
  return sum;
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(number, power) {
  let i = 0 ;
  while (i < power){
    number *= number;
    i++;
  }
  return number;
};

const factorial = function(number) {
	if(number < 2) return 1;
  for(let i = number - 1; i > 1; i--){
    number *= number;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
