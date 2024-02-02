import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/CartContext';
import { LoanCartContext } from '../hooks/loanCartContext';
import { ThemeContext } from '../hooks/themeContext';
import { makeShorterName } from '../utils';
import CartPopUpToBuy from './CartPopUpToBuy';

const CartPopUptoLoan = ({ isOpen, closeCart }) => {
  const { loanedItems, removeLoanedItem, totalLoanQuantity } =
    useContext(LoanCartContext);

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
      className={`container mb-4 pb-4 px-4 mt-0 ${bgColorClass} border border-1 border-top-0 ${borderColorClass}`}
      style={{ width: '30rem', overflowY: 'auto' }}
    >
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className={`text-center mt-3 ${textColorClass}`}>Books to loan</h5>
        <div></div>
      </div>
      <hr />
      {loanedItems.length === 0 && <div>No books... ☹️ </div>}
      <ul className={`${textColorClass}`}>
        {loanedItems?.map((item, index) => (
          <li
            key={index}
            className='d-flex justify-content-between align-items-center'
          >
            {makeShorterName(item.volumeInfo.title, 30)} -{' '}
            {makeShorterName(item.volumeInfo.authors)}
            <button
              className='btn btn-warning m-1 py-1'
              onClick={() => {
                removeLoanedItem(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <div className={`${textColorClass}`}>Quantity: {totalLoanQuantity}</div>
    </div>
  );
};
export default CartPopUptoLoan;
