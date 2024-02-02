import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import CartPopUpToBuy from './CartPopUpToBuy';
import CartPopUptoLoan from './CartPopUptoLoan';

const CartPopUp = ({ isOpen, closeCart }) => {
  const cartRef = useRef(null);
  let { darkMode } = useContext(ThemeContext);

  const cartStyle = {
    // todo: animation does not work
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      closeCart();
    }
  };

  // todo: move this lines to theme context
  const localStorageDarkMode = localStorage.getItem('darkMode');
  if (localStorageDarkMode) {
    if (darkMode !== JSON.parse(localStorageDarkMode)) {
      darkMode = JSON.parse(localStorageDarkMode);
    }
  }

  // todo: move this lines to theme context
  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';
  const textColorClass = darkMode ? 'text-light' : 'text-dark';
  const borderColorClass = darkMode ? 'border-light' : 'border-dark-subtle';

  return (
    <div
      ref={cartRef}
      className={`position-fixed shadow end-0 ${bgColorClass}`}
      style={{ width: '33rem', ...cartStyle, zIndex: 1050 }}
    >
      <CartPopUpToBuy isOpen={isOpen} closeCart={closeCart} />
      <CartPopUptoLoan isOpen={isOpen} closeCart={closeCart} />
    </div>
  );
};

export default CartPopUp;
