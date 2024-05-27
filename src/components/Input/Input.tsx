import { FC, useState } from 'react';
import { IconEye, IconEyeSlash } from '..';
import { InputProps } from './interfaces';
import { InputType } from './types';
import { handleChange, handlePasswordClick, useCurrentValue } from './lib';

const Input: FC<InputProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  helperText,
  errorText,
  onInputChange,
  onBlur,
  error = false,
  help = false,
  required = false,
  value,
  defaultValue,
  disabled,
  min,
  max,
  step,
  valueText,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(value ?? '');
  const [inputType, setInputType] = useState<InputType>(type);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  useCurrentValue(value, setCurrentValue);

  const textStyle = 'text-base sm:text-sm p-2';
  const passwordStyle = !passwordIsVisible ? 'tracking-wider' : '';
  const inputStyle =
    'inline-flex justify-between w-full min-w-[100px] rounded-md border shadow-sm px-2 py-1.5 bg-white text-sm text-slate-600 dark:text-slate-300 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1' +
    ' ' +
    (type === 'password' ? passwordStyle : textStyle) +
    ' ' +
    (error ? 'border-red-500 dark:border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500') +
    ' ' +
    (error || help ? 'mb-1 sm:mb-[27px]' : 'mb-6 sm:mb-[27px]');

  return (
    <div className='relative flex flex-col w-full'>
      <label htmlFor={name} className='block text-sm font-bold text-slate-600 dark:text-slate-300 mb-1.5'>
        {label}
      </label>
      <div className='relative flex flex-row-reverse'>
        {valueText && <div className='top-1 absolute text-sm text-slate-400 right-6'>{valueText}</div>}
        {type === 'password' && (
          <button
            type='button'
            tabIndex={1}
            onClick={() => handlePasswordClick(inputType, setInputType, setPasswordIsVisible)}
            className='absolute py-2.5 sm:py-[9px] pr-2 opacity-60 hover:opacity-100'
          >
            {passwordIsVisible ? <IconEyeSlash className='text-slate-400' /> : <IconEye className='text-slate-400' />}
          </button>
        )}
        <input
          tabIndex={0}
          required={required}
          name={name}
          placeholder={placeholder}
          className={inputStyle}
          type={inputType}
          value={currentValue}
          defaultValue={defaultValue}
          onChange={(event) => handleChange(event, setCurrentValue, onInputChange)}
          onBlur={onBlur}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
        />
      </div>
      {!error && help && <span className='sm:absolute sm:bottom-0 text-xs text-slate-400 mb-6 sm:mb-2 truncate'>{helperText || ''}</span>}
      {error && <span className='sm:absolute sm:bottom-0 text-xs text-red-500 dark:text-red-400 mb-6 sm:mb-2 truncate'>{errorText || 'Compruebe el campo'}</span>}
    </div>
  );
};

export default Input;
