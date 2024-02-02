import { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';
import CheckoutListToBuy from '../components/CheckoutListToBuy';
import CheckoutListToLoans from '../components/CheckoutListToLoans';
import CheckoutContainer from '../components/CheckoutContainer';

const CheckoutPage = () => {
  const { textColorClass, bgColorClass } = useContext(ThemeContext);

  return (
    <div className={`${textColorClass} ${bgColorClass}`}>
      <CheckoutContainer>
        <CheckoutListToBuy />
        <CheckoutListToLoans />
      </CheckoutContainer>
    </div>
  );
};

export default CheckoutPage;
