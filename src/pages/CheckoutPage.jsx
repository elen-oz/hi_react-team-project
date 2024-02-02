import CheckoutListToBuy from '../components/CheckoutListToBuy';
import CheckoutListToLoans from '../components/CheckoutListToLoans';
import CheckoutContainer from '../components/CheckoutContainer';

const CheckoutPage = () => {
  return (
    <CheckoutContainer>
      <CheckoutListToBuy />
      <CheckoutListToLoans />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
