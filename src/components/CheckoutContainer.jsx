import { useContext } from 'react';
import { LoanCartContext } from '../hooks/loanCartContext';
import { CartContext } from '../hooks/cartContext';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutContainer = ({ children }) => {
  const { totalLoanQuantity } = useContext(LoanCartContext);
  const { totalAmount, totalQuantity } = useContext(CartContext);

  return (
    <>
      {children}
      <div className='mx-auto w-25'>
        <div className='my-2 d-flex justify-content-between align-items-center border-bottom'>
          <span>Total books:</span>
          <span>{totalQuantity + totalLoanQuantity}</span>
        </div>
        <div className='my-2 d-flex  justify-content-between align-items-center border-bottom'>
          <span>To pay:</span>
          <span>{totalAmount}</span>
        </div>
      </div>
      <CheckoutForm />
    </>
  );
};
export default CheckoutContainer;
