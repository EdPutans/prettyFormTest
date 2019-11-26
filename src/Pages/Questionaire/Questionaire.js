import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import constants from '../../constants';
import { Input, MenuItem, Select } from '@material-ui/core'

const Questionnaire = () => {
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    favouriteSport: '',
    answer: '',
  })

  const [error, setError] = React.useState(null);
  const [mode, setMode] = React.useState(null);

  React.useEffect(() => {
    setUserData({ ...userData, answer: null })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  return <React.Fragment>
    <Input
      placeholder="Name"
      className="Questionaire_input"
      onChange={e => setUserData({ ...userData, name: e.target.value })}
    />
    <Input
      placeholder="Email"
      className="Questionaire_input"
      onChange={e => setUserData({ ...userData, email: e.target.value })}
    />
    {
      mode === constants.RACES &&
      <Select value={userData.answer}>
        {/* {values.map(v => )} */}


      </Select>}
  </React.Fragment>
};

Questionnaire.propTypes = {};
Questionnaire.defaultProps = {};

export default Questionnaire;
