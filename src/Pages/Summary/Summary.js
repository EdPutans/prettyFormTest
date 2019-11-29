import React from 'react';
import { userDataProps } from '../../utils/customPropTypes';
import './styles.scss';
import { splitByCapital } from '../../utils/utils';

const Summary = ({ userData }) => {
  return (
    <React.Fragment>
      {Object.keys(userData).map(key => (
        <p className="Summary_text">
          {splitByCapital(key)}: {userData[key]}
        </p>
      ))}
    </React.Fragment>
  );
};

Summary.propTypes = {
  userData: userDataProps.isRequired,
};
export default Summary;
