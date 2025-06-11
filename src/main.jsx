import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes.jsx';
import GlobalStyles from '../styles/GlobalStyles.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Cria o QueryClient uma vez
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>
);
