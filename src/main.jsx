import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BookProvider from './hooks/bookContext.jsx';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>
);
