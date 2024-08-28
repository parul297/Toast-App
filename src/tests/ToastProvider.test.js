import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ToastProvider, useToast } from './ToastProvider';

const TestComponent = () => {
  const { addToast } = useToast();
  return <button onClick={() => addToast('Test Message', 'info')}>Show Toast</button>;
};

test('shows a toast message', async () => {
  const { getByText } = render(
    <ToastProvider>
      <TestComponent />
    </ToastProvider>
  );

  fireEvent.click(getByText('Show Toast'));

  await waitFor(() => getByText('Test Message'));
});
