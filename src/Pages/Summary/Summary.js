import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { userDataProps } from '../../utils/customPropTypes';
import './styles.scss';
import { splitByCapital } from '../../utils/utils';

const Summary = ({ userData, reset }) => {
  return (
    <React.Fragment>
      <h4>Here are your results</h4>
      {Object.keys(userData).map(key => (
        <p className="Summary_text">
          {splitByCapital(key)}: {userData[key].toString()}
        </p>
      ))}
      <p>Click below to do that again</p>
      <Button onClick={reset}>Restart me!</Button>
    </React.Fragment>
  );
};

Summary.propTypes = {
  userData: userDataProps.isRequired,
  reset: PropTypes.func.isRequired,
};
export default Summary;
