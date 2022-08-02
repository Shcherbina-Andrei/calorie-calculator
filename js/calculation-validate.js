const calculationForm = document.querySelector('.counter__form');
const ageElement = document.querySelector('#age');
const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');

const pristine = new Pristine (calculationForm, {
  classTo: 'input',
  errorTextParent: 'input',
  errorTextTag: 'div',
  errorTextClass: 'error'
});

const validateNumberInput = function (value) {
  return value.match(/^[Z0-9]+$/);
};

pristine.addValidator(ageElement, validateNumberInput, 'Введите числовое значение');
pristine.addValidator(heightElement, validateNumberInput, 'Введите числовое значение');
pristine.addValidator(weightElement, validateNumberInput, 'Введите числовое значение');

export {pristine};
