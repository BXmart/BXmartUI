import React from 'react';
import { InputProps } from '../interfaces';

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setCurrentValue: React.Dispatch<React.SetStateAction<string>>, onInputChange?: InputProps['onInputChange']) => {
  setCurrentValue(event.target.value);
  if (onInputChange) {
    onInputChange(event);
  }
};

export default handleChange;
