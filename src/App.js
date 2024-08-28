// src/App.js
import React from 'react';
import { ToastProvider, useToast } from './Components/ToastProvider/ToastProvider';

const App = () => {
  const { addToast } = useToast();

  return (
    <div>
      <button onClick={() => addToast('This is a success message!', 'success')}>
        Show Success Toast
      </button>
      <button onClick={() => addToast('This is an error message!', 'error')}>
        Show Error Toast
      </button>
      <button onClick={() => addToast('This is a warning message!', 'warning')}>
        Show Warning Toast
      </button>
      <button onClick={() => addToast('This is an info message!', 'info')}>
        Show Info Toast
      </button>
    </div>
  );
};

const Root = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default Root;
