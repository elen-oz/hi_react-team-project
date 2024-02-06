import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/cartContext';
import { ThemeContext } from '../hooks/themeContext';
import { makeShorterName } from '../utils/utils';

const CartPopUpToBuy = ({ closeCart }) => {
  const { purchasedItems, totalAmount, removeItem, totalQuantity } =
    useContext(CartContext);
  const { bgColorClass, textColorClass, borderColorClass } =
    useContext(ThemeContext);

  return (
    <div
      className={`container mt-4 mx-4 p-4  mt-0 ${bgColorClass} border border-1 border-bottom-0 ${borderColorClass}`}
      style={{ width: '30rem', overflowY: 'auto' }}
    >
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className={`text-center mt-3 ${textColorClass}`}>My Book Cart</h5>
        <div className='d-flex gap-2'>
          <Link to='/checkout' className='btn btn-success'>
            CHECKOUT
          </Link>
          <button className='btn btn-secondary' onClick={closeCart}>
            Close
          </button>
        </div>
      </div>
      <hr />
      {purchasedItems.length === 0 && <div>Your cart is empty... ☹️ </div>}
      <ul className={`${textColorClass}`}>
        {purchasedItems?.map((item, index) => (
          <li
            key={index}
            className='d-flex justify-content-between align-items-center'
          >
            {makeShorterName(item.volumeInfo.title, 30)} -{' '}
            {makeShorterName(item.volumeInfo.authors)}
            <button
              className='btn btn-warning m-1 py-1'
              onClick={() => {
                removeItem(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {purchasedItems.length !== 0 && (
        <div className={`${textColorClass}`}>
          Quantity to buy: {totalQuantity}
        </div>
      )}
      {purchasedItems.length !== 0 && (
        <div className={`${textColorClass}`}>To pay: {totalAmount} SEK</div>
      )}
    </div>
  );
};
export default CartPopUpToBuy;
