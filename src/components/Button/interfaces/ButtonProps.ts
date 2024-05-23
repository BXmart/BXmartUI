import { ReactNode } from 'react';
import { ButtonVariants } from '../types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
  variant?: ButtonVariants;
  icon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}
