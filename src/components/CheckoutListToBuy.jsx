import { useContext } from 'react';
import { CartContext } from '../hooks/CartContext';

const CheckoutListToBuy = () => {
  const { items, totalAmount, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className='mx-auto  p-2' style={{ width: '19rem' }}>
      <h3>To buy</h3>
      <ul className='border p-4'>
        {items.map((item) => (
          <li
            key={item.id}
            className='d-flex  justify-content-between align-items-center'
          >
            <span>{item.volumeInfo.title}</span>
            <span>{item.saleInfo.listPrice.amount}</span>
          </li>
        ))}
      </ul>
      <div className='px-3 d-flex  justify-content-between align-items-center border-bottom'>
        <span>Total:</span>
        <span>{totalAmount}</span>
      </div>
    </div>
  );
};
export default CheckoutListToBuy;
