const validate = (value, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;
      case 'minLength':
      case 'equalTo':
      default:
        isValid = false;
        break;
    }
  }
};

const emailValidator = (value) => {
  // TODO: Implement email validator.
};

const minLengthValidator = (value, minLength) => {
  // TODO: Implement min length validator.
};
