import { MouseEvent, ReactNode, forwardRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const backdropBaseStyle = 'w-full h-full bg-slate-900/75 absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm transition-opacity duration-200';

interface BackdropProps {
  children: ReactNode;
  closeModal: (event: MouseEvent<HTMLDivElement>) => void;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(({ children, closeModal }, ref) => {
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(() => {
    setOpacity('opacity-100');
  }, []);

  return ReactDOM.createPortal(
    <div ref={ref} className={`${backdropBaseStyle} ${opacity}`} onClick={closeModal}>
      {children}
    </div>,
    document.getElementById('portal') as HTMLElement
  );
});

export default Backdrop;
