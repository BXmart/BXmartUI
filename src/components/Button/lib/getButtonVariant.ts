import { ButtonVariants } from '../types';

export const getButtonVariant = (variant: ButtonVariants) => {
  const ButtonVariants = {
    base: 'relative inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out',
    primary: [
      // border
      'border-transparent',
      // text color
      'text-white dark:text-gray-100',
      // background color
      'bg-blue-600 dark:blue-600',
      // hover color
      'hover:bg-blue-800 dark:hover:bg-blue-500',
      // disabled
      'disabled:bg-gray-100 disabled:text-gray-400',
      'disabled:dark:bg-gray-800 disabled:dark:text-gray-500',
    ],
    secondary: [
      // border
      'border-blue-600 dark:border-blue-600',
      // text color
      'text-blue-600 dark:text-white',
      // background color
      'bg-transparent',
      // hover color
      'hover:border-blue-800 hover:text-blue-500 dark:hover:text-white dark:hover:bg-blue-950 dark:hover:border-blue-500',
      // disabled
      'disabled:border-gray-200 disabled:text-gray-200',
      'disabled:dark:border-gray-200 disabled:dark:text-gray-200',
    ],
    warning: [
      // border
      'border-transparent',
      // text color
      'text-white dark:text-gray-100',
      // background color
      'bg-red-600 dark:bg-red-600',
      // hover color
      'hover:bg-red-800 dark:hover:bg-red-500',
      // disabled
      'disabled:bg-gray-100 disabled:text-gray-400',
      'disabled:dark:bg-gray-800 disabled:dark:text-gray-600',
    ],
  };

  if (!variant || !ButtonVariants[variant]) {
    return ButtonVariants.base;
  }

  return ButtonVariants.base + ' ' + ButtonVariants[variant].join(' ');
};
