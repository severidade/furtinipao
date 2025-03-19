/* eslint-disable react/react-in-jsx-scope */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/reset.css';
import './CSS/index.css';
import AppWithReactQuery from './AppWithReactQuery.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <AppWithReactQuery />
    </StrictMode>
  </QueryClientProvider>,
);
