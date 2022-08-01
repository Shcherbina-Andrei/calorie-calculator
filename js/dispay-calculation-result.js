import {calculateNormalCalorieValue} from './calculation-indicators.js';
import {calculateWeightLossCalorieValue} from './calculation-indicators.js';
import {calculateWeightGainCalorieValue} from './calculation-indicators.js';

const counterResultElement = document.querySelector('.counter__result');
const caloriesNormElement = counterResultElement.querySelector('#calories-norm');
const caloriesMinElement = counterResultElement.querySelector('#calories-minimal');
const caloriesMaxElement = counterResultElement.querySelector('#calories-maximal');

const displayResult = function (gender, weight, height, age, activity) {
  caloriesNormElement.textContent = calculateNormalCalorieValue(gender, weight, height, age, activity);
  caloriesMinElement.textContent = calculateWeightLossCalorieValue(gender, weight, height, age, activity);
  caloriesMaxElement.textContent = calculateWeightGainCalorieValue(gender, weight, height, age, activity);
};

const resetResult = function () {
  caloriesNormElement.textContent = '';
  caloriesMinElement.textContent = '';
  caloriesMaxElement.textContent =  '';
};

export {displayResult, resetResult};
