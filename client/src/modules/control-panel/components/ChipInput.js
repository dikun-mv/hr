import React from 'react';
import ChipInput from 'material-ui-chip-input'
import {Field} from 'redux-form';

const AORChipInput = props => (
  <Field
    name={props.source}
    component={props => (
      <ChipInput
        style={{width: "100%"}}
        onChange={chips => props.input.onChange(chips)}
        defaultValue={props.input.value}
        floatingLabelText={props.label}
      />
    )}
    {...props}
  />
);

export default AORChipInput;
