import { Dispatch, SetStateAction } from 'react';
import { InputType } from '../types';

const handlePasswordClick = (inputType: InputType, setInputType: Dispatch<SetStateAction<InputType>>, setPasswordIsVisible: Dispatch<SetStateAction<boolean>>) => {
  if (inputType === 'password') {
    setPasswordIsVisible(true);
    setInputType('text');
  } else if (inputType === 'text') {
    setPasswordIsVisible(false);
    setInputType('password');
  }
};

export default handlePasswordClick;
