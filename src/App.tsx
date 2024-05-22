import { useState } from 'react';
import './App.css';
import { Button, Card, Modal } from './components';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Button isLoading>Botón</Button>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
      </div>
      <Card className='max-w-[200px]'>Ejemplo de tarjeta</Card>
      <Card>Ejemplo de tarjeta</Card>
      {isOpen && <Modal closeModal={() => setIsOpen(false)}>Ejemplo de modal</Modal>}
    </main>
  );
}

export default App;
