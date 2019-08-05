const validate = (value, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value);
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule]);
      case 'equalTo':
        isValid = isValid && equalToValidator(value, rules[rule]);
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = (value) => {
  // TODO: Implement email validator.
};

const minLengthValidator = (value, minLength) => {
  // TODO: Implement min length validator.
};

const equalToValidator = (value, checkValue) => {
  // TODO: Implement the equalTo validator.
};
