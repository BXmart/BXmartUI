export interface InputProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  name?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  help?: boolean;
  error?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  noDark?: boolean;
  landing?: boolean;
  step?: string;
  valueText?: string;
}
