import {displayResult} from './dispay-calculation-result.js';
import {resetResult} from './dispay-calculation-result.js';
import {pristine} from './calculation-validate.js';

const calculationForm = document.querySelector('.counter__form');
const submitButtonElement = document.querySelector('.form__submit-button');
const resetButtonElement = document.querySelector('.form__reset-button');
const genderRadioElements = document.querySelectorAll('input[name=\'gender\']');

const ageElement = document.querySelector('#age');
const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');
const counterResultElement = document.querySelector('.counter__result');
const activityRadioElements = document.querySelectorAll('input[name=\'activity\']');

let currentGender;
let currentActivity;

const setDefaultFormSetting = function () {
  pristine.reset();
  genderRadioElements.forEach((element) => {
    if (element.value === 'male') {
      element.checked = true;
    }
  });
  ageElement.placeholder = 0;
  heightElement.placeholder = 0;
  weightElement.placeholder = 0;
  activityRadioElements.forEach((element) => {
    if (element.value === 'low') {
      element.checked = true;
    }
  });
};

calculationForm.addEventListener('change', (evt) => {
  evt.preventDefault();
  resetButtonElement.disabled = false;
  genderRadioElements.forEach((element) => {
    if (element.checked === true) {
      currentGender = element.value;
    }
  });
  activityRadioElements.forEach((element) => {
    if (element.checked === true) {
      currentActivity = element.value;
    }
  });
  if (pristine.validate(ageElement) && pristine.validate(heightElement) && pristine.validate(weightElement)) {
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.disabled = true;
  }
});


const submitCalculationResult = function () {
  submitButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    counterResultElement.classList.remove('counter__result--hidden');
    displayResult(currentGender, weightElement.value, heightElement.value, ageElement.value, currentActivity);
  });
};

resetButtonElement.addEventListener('click', () => {
  counterResultElement.classList.add('counter__result--hidden');
  resetResult();
  setDefaultFormSetting();
});

export {submitCalculationResult};
