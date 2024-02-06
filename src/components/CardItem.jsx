import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  }, [id]);

  return (
    <div key={id} style={{ maxWidth: '11rem' }}>
      <div
        className={`position-relative card align-items-center ${styles.scaleContainer}`}
      >
        {isForSale && (
          <div className={`${styles.priceContainer} bg-warning text-dark`}>
            {price === 0 ? 'FREE' : `${price} ${currency}`}
          </div>
        )}

        <Link to={`/books/${id}`}>
          <div
            className={`overflow-hidden d-flex justify-content-center align-items-center my-2 `}
            style={{ height: '13rem' }}
          >
            <img
              src={image}
              className='object-cover'
              alt={title}
              style={{ maxWidth: '128px' }}
            />
          </div>

          <div className='card-body py-0' style={{ height: '2.4rem' }}>
            <div className='card-title'>{makeShorterName(title)}</div>
          </div>
        </Link>

        <Rating
          style={{ maxWidth: 150, paddingTop: '1rem' }}
          value={storedRating}
          readOnly
        />

        <div className='my-3 mx-auto w-75'>
          {isForSale ? (
            <button className='btn btn-secondary w-100' onClick={addToBuy}>
              Buy
            </button>
          ) : (
            <button className='btn btn-info w-100' onClick={addToLoan}>
              Loan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
