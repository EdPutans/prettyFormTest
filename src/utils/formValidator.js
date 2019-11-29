export const formTypes = {
  email: 'email',
  userName: 'userName',
};

const validationValues = {
  minNameLength: 5,
  maxNameLength: 30,
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
      if (/\d/.test(value)) {
        return 'Can not contain numbers';
      }
      if (value && value.length < validationValues.minNameLength) {
        return 'Name must be longer';
      }
      if (value && value.length > validationValues.maxNameLength) {
        return 'Please shorten your name';
      }
      return '';
    default:
      return '';
  }
};
