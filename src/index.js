import './index.css';
import App from './App';
import React from 'react';
import '@radix-ui/themes/styles.css';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Theme>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </Theme>
  </React.StrictMode>
);
