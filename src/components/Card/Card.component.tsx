import React from 'react';
import { Slot } from '../Slot';
import { cardStyle } from './utils';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'div';
  return <Component ref={forwardedRef} className={`${cardStyle} ${className}`} {...props} />;
});

Card.displayName = 'Card';

export default Card;
