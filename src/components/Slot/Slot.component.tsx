import { cloneElement, forwardRef, ReactElement } from 'react';

interface SlotProps {
  children: ReactElement;
  [key: string]: unknown;
}

const Slot = forwardRef<unknown, SlotProps>(({ children, ...props }, ref) => {
  return cloneElement(children, { ...props, ref });
});

Slot.displayName = 'Slot';

export default Slot;
