import React from 'react';
import './styles.scss';
import {
  Input,
  MenuItem,
  Select,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
} from '@material-ui/core';
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
    { key: 'Monaco', val: 'monaco' },
    { key: 'Spa', val: 'spa' },
    { key: 'Suzuka', val: 'suzuka' },
    { key: 'Monza', val: 'monza' },
  ],
};

const Questionaire = ({ userData, onChange, onSubmit }) => {
  const [error, setError] = React.useState({
    name: '',
    email: '',
  });

  React.useEffect(() => {
    onChange('answer', '');
  }, [userData.sportType]);

  React.useEffect(() => {
    setError({
      email: formValidator(formTypes.email, userData.email),
      name: formValidator(formTypes.userName, userData.name),
    });
  }, [userData]);

  const disabledSubmit =
    !userData.name ||
    !userData.email ||
    !userData.answer ||
    !userData.sportType ||
    Object.values(error).find(e => Boolean(e));

  const renderConditionalInput = () => {
    switch (userData.sportType) {
      case constants.sportTypes.football.val:
        return (
          <Input
            value={userData.answer}
            placeholder="Team you support"
            className="Questionaire_input"
            onChange={e => onChange('answer', e.target.value)}
          />
        );
      case constants.sportTypes.formulaOne.val:
        return (
          <FormControl>
            <InputLabel className="Questionaire_input_label" id="track">
              Select the greatest track
            </InputLabel>
            <Select
              labelId="track"
              value={userData.answer}
              className="Questionaire_input"
              onChange={e => onChange('answer', e.target.value)}
            >
              {constants.raceTracks.map(track => (
                <MenuItem key={track.key} value={track.val}>
                  {track.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case constants.sportTypes.tennis.val:
        return (
          <Input
            value={userData.answer}
            placeholder="Favourite player"
            className="Questionaire_input"
            onChange={e => onChange('answer', e.target.value)}
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
      {error.name && <p className="Questionaire_errorText">{error.name}</p>}
      <Input
        placeholder="Email"
        className="Questionaire_input"
        onChange={e => onChange('email', e.target.value)}
      />
      {error.email && <p className="Questionaire_errorText">{error.email}</p>}
      <FormControl>
        <InputLabel className="Questionaire_input_label" id="sportType">
          Sport Type
        </InputLabel>
        <Select
          labelId="sportType"
          value={userData.sportType}
          className="Questionaire_input"
          onChange={e => onChange('sportType', e.target.value)}
        >
          {Object.keys(constants.sportTypes).map(s => (
            <MenuItem key={s} value={constants.sportTypes[s].val}>
              {constants.sportTypes[s].key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {renderConditionalInput()}
      <div>
        <Checkbox
          id="ch"
          onChange={() => onChange('acceptedCommunication', !userData.acceptedCommunication)}
        />

        <label type="text" htmlFor="id">
          I agree to receive spam
        </label>
      </div>
      <Button
        disabled={disabledSubmit}
        className={`Questionaire_submit${disabledSubmit ? '_disabled' : ''}`}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

Questionaire.propTypes = {
  userData: userDataProps.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Questionaire;
