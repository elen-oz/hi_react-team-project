import { useContext } from 'react';
import { CartContext } from '../hooks/CartContext';

const CheckoutListToBuy = () => {
  const { purchasedItems, totalAmount, removeItem, clearCart } =
    useContext(CartContext);

  const handleRemoveItemToCart = (id) => {
    removeItem(id);
  };

  return (
    <div className='mx-auto  p-2' style={{ width: '35rem' }}>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h3>To buy</h3>
        <button className='btn btn-danger' onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      {purchasedItems.length === 0 && <div>Your cart is empty... ☹️ </div>}
      <ol className='list-group list-group-numbered mb-5'>
        {purchasedItems.map((item) => (
          <li
            key={item.id}
            className='list-group-item d-flex justify-content-between'
          >
            <span className='w-100 px-2 d-flex justify-content-between'>
              <span>{item.volumeInfo.title}</span>
              <span>
                {item.saleInfo.listPrice.amount}{' '}
                <button
                  className='btn btn-warning m-1 py-1'
                  onClick={() => {
                    handleRemoveItemToCart(item.id);
                  }}
                >
                  X
                </button>
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div className='px-3 d-flex  justify-content-between align-items-center border-bottom'>
        <span>Total:</span>
        <span>{totalAmount}</span>
      </div>
    </div>
  );
};
export default CheckoutListToBuy;
