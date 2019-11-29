// eslint-disable-next-line import/prefer-default-export
export const splitByCapital = string =>
  // please see https://stackoverflow.com/a/7888288/10424372 for other options
  string
    .replace(/([A-Z]+)/g, ',$1')
    .replace(/^,/, '')
    .split(',')
    .join(' ');
