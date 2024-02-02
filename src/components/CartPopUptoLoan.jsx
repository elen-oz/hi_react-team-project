import { useContext, useEffect, useRef } from 'react';
import { LoanCartContext } from '../hooks/loanCartContext';
import { ThemeContext } from '../hooks/themeContext';
import { makeShorterName } from '../utils/utils';

const CartPopUptoLoan = () => {
  const { loanedItems, removeLoanedItem, totalLoanQuantity } =
    useContext(LoanCartContext);
  let { bgColorClass, textColorClass, borderColorClass } =
    useContext(ThemeContext);

  return (
    <div
      className={`container mb-4 pb-4 px-4 mt-0 ${bgColorClass} border border-1 border-top-0 ${borderColorClass}`}
      style={{ width: '30rem', overflowY: 'auto' }}
    >
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className={`text-center mt-3 ${textColorClass}`}>Books to loan</h5>
        <div></div>
      </div>
      <hr />
      {loanedItems.length === 0 && <div>No books... ☹️ </div>}
      <ul className={`${textColorClass}`}>
        {loanedItems?.map((item, index) => (
          <li
            key={index}
            className='d-flex justify-content-between align-items-center'
          >
            {makeShorterName(item.volumeInfo.title, 30)} -{' '}
            {makeShorterName(item.volumeInfo.authors)}
            <button
              className='btn btn-warning m-1 py-1'
              onClick={() => {
                removeLoanedItem(item.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <div className={`${textColorClass}`}>Quantity: {totalLoanQuantity}</div>
    </div>
  );
};
export default CartPopUptoLoan;
