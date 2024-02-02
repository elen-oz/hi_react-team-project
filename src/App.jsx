import { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './hooks/themeContext';
import { BookContext } from './hooks/bookContext';
import { CartPopUpContext } from './hooks/cartPopUpContext';
import { CategoryContext } from './hooks/categoryContext';
import Homepage from './pages/HomePage';
import BookPage from './pages/BookPage';
import CartPopUp from './components/CartPopUp';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import BookDetailsProvider from './hooks/bookDetailsContext';
import AccessibilityPage from './pages/AccessibilityPage';
import NotFoundPage from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PagesContainer from './components/PagesContainer';

function App() {
  const { darkMode, bgColorClass } = useContext(ThemeContext);
  const { category } = useContext(CategoryContext);
  // const [category, setCategory] = useState('');
  // const { isOpen, toggleCart } = useContext(CartPopUpContext);

  return (
    <div
      data-bs-theme={darkMode ? 'dark' : 'light'}
      className={`vh-100 ${bgColorClass}`}
    >
      <Router>
        <PagesContainer>
          <CartPopUp />
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
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/terms' element={<TermsOfUsePage />} />
            <Route path='/accessibility' element={<AccessibilityPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          {/* <Footer /> */}
        </PagesContainer>
      </Router>
    </div>
  );
}

export default App;
