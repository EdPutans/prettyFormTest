export const formTypes = {
  email: 'email',
  userName: 'userName',
};

const validationValues = {
  minNameLength: 5,
  maxNameLength: 20,
  // shamelessly stolen from https://stackoverflow.com/a/9204568/10424372
  emailRegex: /\S+@\S+\.\S+/,
};

export const formValidator = (type, value) => {
  switch (type) {
    case formTypes.email:
      if (value && !validationValues.emailRegex.test(value)) {
        return 'Please provide a valid email';
      }
      return '';
    case formTypes.userName:
      // see https://stackoverflow.com/a/12778207/10424372 for this one
      if (value && !/^[a-zA-Z\s]*$/.test(value)) {
        return 'Must be A-Z characters only';
      }
      if (value && value.length < validationValues.minNameLength) {
        return `Name must be loner than ${validationValues.minNameLength} chars`;
      }
      if (value && value.length > validationValues.maxNameLength) {
        return `Cool name. Shorten it to <${validationValues.maxNameLength} please?`;
      }
      return '';
    default:
      return '';
  }
};
