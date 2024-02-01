import { useContext } from 'react';
import { CartContext } from '../hooks/CartContext';

const CheckoutListToLoans = () => {
  const { loanedItems, totalAmount, removeItem, clearCart } =
    useContext(CartContext);

  return (
    <div className='mx-auto mb-3 p-2' style={{ width: '19rem' }}>
      <h3>To loans</h3>
      <ul className='border p-4'>
        {loanedItems.map((item) => (
          <li
            key={item.id}
            className='d-flex  justify-content-between align-items-center'
          >
            <span>{item.volumeInfo.title}</span>
            <span>1</span>
          </li>
        ))}
      </ul>
      {/* <div className='px-3 d-flex  justify-content-between align-items-center border-bottom'>
        <span>Total:</span>
        <span>{totalAmount}</span>
      </div> */}
    </div>
  );
};
export default CheckoutListToLoans;
