import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'
import { FavoritesProvider } from './Context/FavoritesContext';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API

if (!PUBLISHABLE_KEY || !FRONTEND_API) {
  throw new Error('Missing Clerk configuration')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} frontendApi={FRONTEND_API}>
    <BrowserRouter>
    <FavoritesProvider>
      <App />
      </FavoritesProvider>
    </BrowserRouter>
  </ClerkProvider>
);
