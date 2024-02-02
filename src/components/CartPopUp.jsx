import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/CartContext';
import { ThemeContext } from '../hooks/themeContext';

const CartPopUp = ({ isOpen, closeCart }) => {
  const { purchasedItems, totalAmount, removeItem, clearCart } =
    useContext(CartContext);

  const handleRemoveItemToCart = (id) => {
    removeItem(id);
  };

  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      closeCart();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const cartStyle = {
    // todo: animation does not work
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };
  let { darkMode } = useContext(ThemeContext);

  const localStorageDarkMode = localStorage.getItem('darkMode');
  if (localStorageDarkMode) {
    if (darkMode !== JSON.parse(localStorageDarkMode)) {
      darkMode = JSON.parse(localStorageDarkMode);
    }
  }

  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';
  const textColorClass = darkMode ? 'text-light' : 'text-dark';
  const borderColorClass = darkMode ? 'border-light' : 'border-dark-subtle';

  return (
    <div
      ref={cartRef}
      className={`position-fixed shadow end-0 ${bgColorClass}`}
      style={{ width: '33rem', ...cartStyle, zIndex: 1050 }}
    >
      <div
        className={`container my-4 p-4  mt-0 ${bgColorClass} border border-1  ${borderColorClass}`}
        style={{ width: '30rem', overflowY: 'auto' }}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className={`text-center mt-3 ${textColorClass}`}>
            {' '}
            My Book Cart
          </h5>
          <button className='btn btn-danger' onClick={clearCart}>
            Clear
          </button>
        </div>
        <hr />

        <ul className={`${textColorClass}`}>
          {purchasedItems?.map((item, index) => (
            <li
              key={index}
              className='d-flex justify-content-between align-items-center'
            >
              {item.volumeInfo.title} - {item.volumeInfo.authors}{' '}
              <button
                className='btn btn-warning m-1 py-1'
                onClick={() => {
                  handleRemoveItemToCart(item.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <div className={`${textColorClass}`}>Total: {totalAmount}</div>

        <div className='d-flex justify-content-between mt-3'>
          <Link to='/checkout' className='btn btn-success'>
            CHECKOUT
          </Link>

          <button className='btn btn-secondary' onClick={closeCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
