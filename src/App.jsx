import { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './hooks/themeContext';
import { BookContext } from './hooks/bookContext';
import Homepage from './pages/HomePage';
import BookPage from './pages/BookPage';
import CartPopUp from './components/CartPopUp';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import BookDetailsProvider from './hooks/bookDetailsContext';

import AccessibilityPage from './pages/AccessibilityPage';

import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { darkMode, bgColorClass } = useContext(ThemeContext);
  const [category, setCategory] = useState('');
  const { fetchBooksByCategory } = useContext(BookContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div data-bs-theme={darkMode ? 'dark' : 'light'} className={bgColorClass}>
      <Router>
        <Header
          toggleCart={toggleCart}
          setCategory={setCategory}
          fetchBooksByCategory={fetchBooksByCategory}
        />
        <CartPopUp isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
        <Routes>
          <Route path='/' element={<Homepage category={category} />} />
          <Route
            path='/books/:id'
            element={
              <BookDetailsProvider>
                <BookPage />
              </BookDetailsProvider>
            }
          />

          {/* <Route path='/' element={<Homepage category={category} />} />
          <Route path='/books/:id' element={<BookPage />} /> */}

          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/privacy' element={<PrivacyPage />} />

          <Route path='/terms' element={<TermsOfUsePage />} />
          <Route path='/accessibility' element={<AccessibilityPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
