import { useContext } from 'react';
import { CartContext } from '../hooks/CartContext';

const CheckoutListToBuy = () => {
  const { purchasedItems, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className='mx-auto  p-2' style={{ width: '35rem' }}>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h3>To buy</h3>

        {purchasedItems.length !== 0 && (
          <button className='btn btn-danger' onClick={clearCart}>
            Clear Shopping Cart
          </button>
        )}
      </div>
      {purchasedItems.length === 0 && (
        <div>Your shopping cart is empty... ☹️ </div>
      )}
      <ol className='list-group list-group-numbered mb-5'>
        {purchasedItems.map((item) => (
          <li
            key={item.id}
            className='list-group-item d-flex justify-content-between'
          >
            <span className='w-100 px-2 d-flex justify-content-between'>
              <span>{item.volumeInfo.title}</span>
              <span>
                {item.saleInfo.listPrice.amount}
                <button
                  className='btn btn-warning m-1 py-1'
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  X
                </button>
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default CheckoutListToBuy;
