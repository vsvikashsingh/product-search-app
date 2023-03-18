import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContext, AppProvider } from './context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
    </AppProvider>
 
);
