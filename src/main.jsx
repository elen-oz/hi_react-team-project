import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './hooks/bookContext.jsx';
import ThemeProvider from './hooks/themeContext.jsx';
// import BookDetailsProvider from './hooks/bookDetailsContext.jsx';
import CartProvider from './hooks/CartContext.jsx';
import LoanCartProvider from './hooks/loanCartContext.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BookProvider>
        <CartProvider>
          <LoanCartProvider>
            <App />
          </LoanCartProvider>
        </CartProvider>
      </BookProvider>
    </ThemeProvider>
  </React.StrictMode>
);
