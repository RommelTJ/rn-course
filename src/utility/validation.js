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
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);
};

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

const equalToValidator = (value, checkValue) => {
  // TODO: Implement the equalTo validator.
};
