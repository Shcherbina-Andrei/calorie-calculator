const calculateNormalCalorieValue = function (gender, weight, height, age, activity) {
  let calorieValue;
  let coefficient;
  switch (activity) {
    case 'min' :
      coefficient = 1.2;
      break;
    case 'low' :
      coefficient = 1.375;
      break;
    case 'medium' :
      coefficient = 1.55;
      break;
    case 'high' :
      coefficient = 1.725;
      break;
    case 'max' :
      coefficient = 1.9;
      break;
  }
  calorieValue = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === 'male') {
    calorieValue = calorieValue + 5;
  } else if (gender === 'female') {
    calorieValue = calorieValue - 161;
  }

  calorieValue = Math.floor(calorieValue * coefficient);

  return calorieValue;
};

const calculateWeightGainCalorieValue = function (gender, weight, height, age, activity) {
  let calorieValue = calculateNormalCalorieValue(gender, weight, height, age, activity);
  calorieValue = Math.floor(calorieValue + Math.round(calorieValue / 100 * 15));
  return calorieValue;
};

const calculateWeightLossCalorieValue = function (gender, weight, height, age, activity) {
  let calorieValue = calculateNormalCalorieValue(gender, weight, height, age, activity);
  calorieValue = Math.floor(calorieValue - Math.round(calorieValue / 100 * 15));
  return calorieValue;
};


export {calculateNormalCalorieValue, calculateWeightGainCalorieValue, calculateWeightLossCalorieValue};
