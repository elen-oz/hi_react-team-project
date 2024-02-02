import CheckoutForm from '../components/CheckoutForm';
import CheckoutListToBuy from '../components/CheckoutListToBuy';
// import CheckoutListToLoans from '../components/CheckoutListToLoans';

const CheckoutPage = () => {
  return (
    <>
      {/* <CheckoutListToLoans /> */}
      <CheckoutListToBuy />
      <CheckoutForm />
    </>
  );
};

export default CheckoutPage;
