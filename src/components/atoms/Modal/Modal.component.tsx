import { MouseEvent, ReactNode, forwardRef, useEffect, useState } from 'react';
import { Button, Card } from '..';
import { Backdrop } from '../Backdrop';

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, closeModal }, ref) => {
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
        <Card onClick={handleCardClick} className={`${position} transition-all duration-500 ease-out`}>
          {children}
          <Button onClick={closeModal}>Cerrar</Button>
        </Card>
      </div>
    </Backdrop>
  );
});

export default Modal;
