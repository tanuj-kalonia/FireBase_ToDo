import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <TodoContextProvider>
    {/* Whatever is given to values will be accessd in thw whole app */}
    <App />
  </TodoContextProvider>

);

