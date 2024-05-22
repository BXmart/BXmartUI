import React from 'react';
import { Slot } from '..';
import { cardStyle } from './utils';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'div';
  return <Component ref={forwardedRef} className={`${cardStyle} ${className}`} {...props} />;
});

Card.displayName = 'Card';

export default Card;
