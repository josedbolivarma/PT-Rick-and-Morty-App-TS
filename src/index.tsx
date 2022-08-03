import React from 'react';
import ReactDOM from 'react-dom/client';

import { RickMortyProvider } from './app/context';
import { RickMortyApp } from './RickMortyApp';

// Styles
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RickMortyProvider>
      <RickMortyApp />
    </RickMortyProvider>
  </React.StrictMode>
);