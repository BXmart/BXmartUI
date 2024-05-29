import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <h1 className='text-4xl text-center text-blue-500'>Hello, Vite!</h1>
      <p className='text-center'>Edit src/main.tsx and save to test HMR updates.</p>
    </div>
  </React.StrictMode>
);
