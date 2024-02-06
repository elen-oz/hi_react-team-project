import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import BookProvider from './hooks/bookContext.jsx';
import ThemeProvider from './hooks/themeContext.jsx';
import CartProvider from './hooks/cartContext.jsx';
import LoanCartProvider from './hooks/loanCartContext.jsx';
import CartPopUpProvider from './hooks/cartPopUpContext.jsx';
import CategoryProvider from './hooks/categoryContext.jsx';
import FilterProvider from './hooks/filterContext.jsx';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import '@smastrom/react-rating/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CategoryProvider>
        <FilterProvider>
          <BookProvider>
            <CartProvider>
              <LoanCartProvider>
                <CartPopUpProvider>
                  <App />
                </CartPopUpProvider>
              </LoanCartProvider>
            </CartProvider>
          </BookProvider>
        </FilterProvider>
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
