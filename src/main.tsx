/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/reset.css';
import './index.css';
// import App from './App.tsx';
import AppWithReactQuery from './AppWithReactQuery.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithReactQuery />
  </StrictMode>,
);
