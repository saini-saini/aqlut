import './index.css';
import App from './App';
import React from 'react';
import '@radix-ui/themes/styles.css';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
