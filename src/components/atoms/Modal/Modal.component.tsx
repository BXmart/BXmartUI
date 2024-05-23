import { MouseEvent, ReactNode, forwardRef, useEffect, useState } from 'react';
import { Card, IconClose } from '..';
import { Backdrop } from '../Backdrop';

interface ModalProps {
  children: ReactNode;
  className?: string;
  closeModal: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, className, closeModal }, ref) => {
  const [position, setPosition] = useState('-translate-y-10');

  useEffect(() => {
    setPosition('translate-y-0');
  }, []);

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Backdrop closeModal={closeModal}>
      <div ref={ref}>
        <Card onClick={handleCardClick} className={`${position} transition-all duration-500 ease-out ${className}`}>
          {children}
          <button className='absolute right-2 top-3 text-slate-400 hover:text-slate-600' onClick={closeModal}>
            <IconClose />
          </button>
        </Card>
      </div>
    </Backdrop>
  );
});

export default Modal;
