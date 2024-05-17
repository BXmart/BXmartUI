import { FC, ReactNode } from 'react';
import { IconLoading } from '../Icons';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  onClick?: (event: any) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
  icon?: JSX.Element;
  iconOnly?: boolean;
  className?: string;
  noDark?: boolean;
  color?: 'red';
}

type variantsT = {
  [clave: string]: string;
};

const variants: variantsT = {
  primary: 'bg-cyan-900 text-green-400 hover:bg-green-500 hover:text-cyan-900 focus:outline-none focus:ring focus:ring-green-400',
  secondary: 'border border-green-600 text-green-600 hover:border-green-400 hover:bg-green-400 hover:text-cyan-900 focus:outline-none focus:ring focus:ring-green-300',
  tertiary: 'text-blue-500 hover:underline',
};

const variantsDark: variantsT = {
  primary: 'dark:bg-green-400 dark:text-green-950 dark:font-medium dark:hover:bg-slate-950/50 dark:hover:text-green-400',
  secondary: 'dark:border-green-400 dark:text-green-400 dark:hover:border-green-400 dark:hover:bg-green-400 dark:hover:text-cyan-900',
  tertiary: 'dark:text-cyan-300',
};

const variantsRed: variantsT = {
  primary: 'bg-red-600 text-white hover:bg-red-800 hover:text-white focus:outline-none focus:ring focus:ring-red-600',
  secondary: 'border border-red-600 text-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring focus:ring-green-300',
  tertiary: 'text-red-500 hover:underline',
};

const variantsDarkRed: variantsT = {
  primary: 'bg-red-600 text-white hover:bg-red-800 hover:text-white focus:outline-none focus:ring focus:ring-red-600',
  secondary: 'border border-red-400 text-red-400 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring focus:ring-green-300',
  tertiary: 'text-red-500 hover:underline',
};

const variantsDisabled: variantsT = {
  primary: 'bg-slate-300/25 text-slate-400 dark:bg-cyan-900/50 dark:text-cyan-700 active:scale-100',
  secondary: 'border border-slate-300 text-slate-300 dark:border-cyan-700 dark:text-cyan-700 active:scale-100',
  tertiary: 'text-slate-400 dark:text-cyan-700 active:scale-100',
};

function getStyle(loading: boolean, iconOnly: boolean, disabled: boolean, variant: string, noDark?: boolean, color?: string) {
  if (loading) {
    return (iconOnly ? 'px-1 w-7' : 'px-4') + ' ' + 'relative h-9 sm:h-7 text-sm py-1 rounded-full' + ' ' + variantsDisabled.primary;
  }
  return (
    (iconOnly ? 'px-0 w-7' : variant === 'tertiary' ? 'px-0' : 'px-4') +
    ' ' +
    'h-9 sm:h-7 flex flex-shrink-0 gap-2 items-center justify-center rounded-full text-sm scale-100 transition-transform duration-100 active:scale-95' +
    ' ' +
    (disabled ? variantsDisabled[variant] : color === 'red' ? variantsRed[variant] + ' ' + (!noDark && variantsDarkRed[variant]) : variants[variant] + ' ' + (!noDark && variantsDark[variant]))
  );
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  fullWidth = false,
  icon,
  iconOnly = false,
  className,
  noDark = false,
  color,
}) => {
  const buttonStyle = getStyle(loading, iconOnly, disabled, variant, noDark, color);

  return (
    <>
      {loading ? (
        <button disabled className={fullWidth ? 'w-full' : 'w-full md:w-auto'}>
          <div className={buttonStyle + ' ' + className + ' flex gap-2 items-center justify-center'}>
            <div className='h-5 animate-spin'>
              <div className='text-xl'>{<IconLoading />}</div>
            </div>
            {icon && iconOnly ? '' : <div>{children}</div>}
          </div>
        </button>
      ) : (
        <button type={type} disabled={disabled} onClick={onClick} className={fullWidth ? 'w-full' : 'w-full md:w-auto'}>
          <div className={buttonStyle + ' ' + className}>
            {icon ? icon : null}
            {icon && iconOnly ? '' : children}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
