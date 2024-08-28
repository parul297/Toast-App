import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider, useToast } from './components/ToastProvider';

const AppWrapper = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// Inside any component
const ExampleComponent = () => {
  const { addToast } = useToast();

  const handleShowToast = () => {
    addToast('This is a success message!', 'success', 5000, 'bottom-left');
  };

  return <button onClick={handleShowToast}>Show Toast</button>;
};
