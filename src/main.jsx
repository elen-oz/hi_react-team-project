import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './hooks/bookContext.jsx';
import ThemeProvider from './hooks/themeContext.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </ThemeProvider>
  </React.StrictMode>
);
