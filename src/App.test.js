import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock react-router-dom minimally for this unit test environment
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

import App from './App';

test('renders app shell', () => {
  render(<App />);
  // Smoke test: ensure app renders by checking for known text in Home page or app shell
  // If 'learn react' is not present in your project, this test tries for the Home page heading or falls back to any element
  const anyText = screen.queryByText(/learn react/i) || screen.queryByText(/Loading post/i) || screen.queryByRole('heading', { level: 1 });
  expect(anyText).not.toBeNull();
});
