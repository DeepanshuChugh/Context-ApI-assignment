import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';
import { ThemeProvider } from './Context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);