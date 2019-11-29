// eslint-disable-next-line import/prefer-default-export
export const splitByCapital = string => {
  const result = string.replace(/([A-Z]+)/g, ',$1').replace(/^,/, '');
  return result.split(',').join(' ');
};
