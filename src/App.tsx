import { useState } from 'react';
import './App.css';
import { Button, Card, Modal, Select, Title } from './components';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className='flex flex-col gap-2'>
      <Title as='h1'>Esto es un título</Title>
      <Title as='h2'>Esto es un título</Title>
      <Title as='h3'>Esto es un título</Title>
      <div className='flex gap-2'>
        <Button isLoading>Botón</Button>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
      </div>
      <Card className='max-w-[200px]'>Ejemplo de tarjeta</Card>
      <Card>Ejemplo de tarjeta</Card>
      {isOpen && <Modal closeModal={() => setIsOpen(false)}>Ejemplo de modal</Modal>}
      <Select label='Ejemplo de título' options={options} onChange={(e) => console.log(e)} />
    </main>
  );
}

export default App;
