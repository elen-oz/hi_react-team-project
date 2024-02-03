import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import { makeShorterName } from '../utils/utils';
import styles from '../index.module.css';

const CardItem = ({
  title,
  image,
  id,
  price,
  currency,
  addToBuy,
  addToLoan,
  isForSale,
}) => {
  const [storedRating, setStoredRating] = useState(0);

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, []);

  return (
    <div key={id} style={{ maxWidth: '14rem' }}>
      <div className={`card align-items-center ${styles.imgContainer}`}>
        <Link to={`/books/${id}`}>
          <div
            className={`overflow-hidden d-flex align-items-center my-2 `}
            style={{ height: '17.5rem' }}
          >
            <img src={image} className='object-cover w-100' alt={title} />
          </div>

          <div className='card-body py-0'>
            <h6 className='card-title fs-6'>{makeShorterName(title)}</h6>
          </div>
        </Link>

        <Rating style={{ maxWidth: 150 }} value={storedRating} readOnly />

        <div className='my-3 mx-auto w-75'>
          {isForSale ? (
            <button className='btn btn-primary w-100' onClick={addToBuy}>
              Buy
            </button>
          ) : (
            <button className='btn btn-info w-100'>Loan</button>
          )}

          {/* {!isForSale ? (
            <button className='btn btn-info' onClick={addToLoan}>
              Loan
            </button>
          ) : (
            <button className='btn btn-info disabled' disabled>
              Not for loan
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
