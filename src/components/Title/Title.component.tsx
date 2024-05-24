import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { TitleVariants, getTitleStyle } from '.';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: TitleVariants;
  children: ReactNode;
  className?: string;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ as: Component = 'h1', children, className, ...props }, ref) => {
  const combinedClassName = `${getTitleStyle(Component as TitleVariants)} ${className || ''}`;

  return (
    <Component ref={ref} className={combinedClassName} {...props}>
      <span className='sr-only'>{children}</span>
      {children}
    </Component>
  );
});

Title.displayName = 'Title';

export default Title;
