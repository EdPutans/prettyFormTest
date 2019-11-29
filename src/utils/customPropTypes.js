import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const userDataProps = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  answer: PropTypes.string,
  sportType: PropTypes.string,
  acceptedCommunication: PropTypes.bool,
});
