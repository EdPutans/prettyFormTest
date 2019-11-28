export const formTypes = {
  email: 'email',
  userName: 'userName',
};

const validationValues = {
  minNameLength: 5,
  maxNameLength: 30,
  emailRegex: /^\S+@\S+\.\S+$/,
};

export const formValidator = (type, value) => {
  switch (type) {
    case formTypes.email:
      return !validationValues.emailRegex.test(value) ? 'Please provide a valid email' : null;
    case formTypes.userName:
      if (!value) {
        return null;
      }
      if (value && value.length < validationValues.minNameLength) {
        return 'Name must be longer';
      }
      if (value && value.length > validationValues.maxNameLength) {
        return 'Please shorten your name';
      }
      return null;
    default:
      return null;
  }
};
