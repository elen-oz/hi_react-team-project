import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './context/bookContext.jsx';
import ThemeProvider from './context/themeContext.jsx';
import CartProvider from './context/CartContext.jsx';
import LoanCartProvider from './context/loanCartContext.jsx';
import CartPopUpProvider from './context/cartPopUpContext.jsx';
import CategoryProvider from './context/categoryContext.jsx';
import FilterProvider from './context/filterContext.jsx';
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
