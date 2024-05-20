import React from 'react';
import { Slot } from '../Slot';
import { ButtonProps } from './interfaces';
import { getButtonVariant } from './lib';
import { IconLoading } from '../Icons';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = 'primary', className = '', icon, isLoading = false, loadingText, disabled, children, ...props }: ButtonProps, forwardedRef) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component ref={forwardedRef} className={`${getButtonVariant(variant)} ${className}`} disabled={disabled || isLoading} {...props}>
        {icon ? (
          <span className='flex shrink-0 items-center justify-center gap-1.5'>
            <Slot className='size-4 shrink-0' aria-hidden='true'>
              {icon}
            </Slot>
            <span className='sr-only'>{children}</span>
            {children}
          </span>
        ) : isLoading ? (
          <span className='pointer-events-none flex shrink-0 items-center justify-center gap-1.5'>
            <IconLoading className='size-4 shrink-0' aria-hidden='true' />
            <span className='sr-only'>{loadingText ? loadingText : 'Cargando'}</span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
