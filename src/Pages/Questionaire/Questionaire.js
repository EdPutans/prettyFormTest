import React from 'react';
import './styles.scss';
import { Input, MenuItem, Select, Button, Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import { formTypes, formValidator } from '../../utils/formValidator';
import { userDataProps } from '../../utils/customPropTypes';

const constants = {
  sportTypes: {
    tennis: { key: 'Tennis', val: 'tennis' },
    football: { key: 'Football', val: 'football' },
    formulaOne: { key: 'Formula One', val: 'formulaOne' },
  },
  raceTracks: [
    { key: 'Monaco', value: 'monaco' },
    { key: 'Spa', value: 'spa' },
    { key: 'Suzuka', value: 'suzuka' },
    { key: 'Monza', value: 'monza' },
  ],
};

const Questionnaire = ({ userData, onChange, onSubmit }) => {
  const [error, setError] = React.useState({
    name: '',
    email: '',
  });

  React.useEffect(() => {
    onChange('answer', null);
  }, [userData.sportType]);

  React.useEffect(() => {
    setError(formValidator(formTypes.email, userData.email));
    setError({ ...error, name: formValidator(formTypes.userName, userData.name) });
  }, [userData]);

  const renderConditionalInput = () => {
    switch (userData.sportType) {
      case constants.sportTypes.football.val:
        return (
          <Input
            value={userData.answer}
            placeholder="Favourite football player"
            className="Questionaire_input"
            onChange={e => onChange({ ...userData, answer: e.target.value })}
          />
        );
      case constants.sportTypes.formulaOne.val:
        return (
          <Select
            value={userData.sportType}
            className="Questionaire_input"
            onChange={val => onChange({ ...userData, answer: val.target.value })}
          >
            {constants.raceTracks.map(track => (
              <MenuItem key={track.val} value={track.val}>
                {track.key}
              </MenuItem>
            ))}
          </Select>
        );
      case constants.sportTypes.tennis.val:
        return (
          <Input
            value={userData.answer}
            placeholder="Favourite player"
            className="Questionaire_input"
            onChange={e => onChange({ ...userData, answer: e.target.value })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Input
        value={userData.name}
        placeholder="Name"
        className="Questionaire_input"
        onChange={e => onChange('name', e.target.value)}
      />
      {error && error.name && <p className="Questionaire_errorText">{error.name}</p>}
      <Input
        placeholder="Email"
        className="Questionaire_input"
        onChange={e => onChange('email', e.target.value)}
      />
      {error && error.email && <p className="Questionaire_errorText">{error.email}</p>}
      <Select
        displayEmpty
        value={userData.sportType}
        className="Questionaire_input"
        onChange={val => onChange('sportType', val.target.value)}
      >
        {Object.keys(constants.sportTypes).map(s => (
          <MenuItem key={s} value={constants.sportTypes[s].val}>
            {constants.sportTypes[s].key}
          </MenuItem>
        ))}
      </Select>

      {renderConditionalInput()}
      <div>
        <Checkbox
          onChange={() => onChange('acceptedCommunication', !userData.acceptedCommunication)}
        />
        <label>Accept further communication</label>
      </div>
      <Button className="Questionnaire_submit" onClick={onSubmit}>
        Submit
      </Button>
    </React.Fragment>
  );
};

Questionnaire.propTypes = {
  userData: userDataProps.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Questionnaire.defaultProps = {};

export default Questionnaire;
