import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import ReviewModal from './ReviewModal';
import { Rating } from '@smastrom/react-rating';
import { makeShorterName } from '../utils';

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
  // const [showModal, setShowModal] = useState(false);
  const [storedRating, setStoredRating] = useState(0);

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, []);

  // const toggleModal = (e) => {
  //   // e.stopPropagation();
  //   setShowModal(!showModal);
  // };

  return (
    <div key={id} style={{ maxWidth: '14rem' }}>
      <div className='card align-items-center'>
        <Link to={`/books/${id}`}>
          <div
            className='overflow-hidden d-flex align-items-center my-2'
            style={{ height: '17.5rem' }}
          >
            <img src={image} className='object-cover w-100' alt={title} />
          </div>

          <div className='card-body py-0'>
            <h6 className='card-title fs-6'>{makeShorterName(title)}</h6>
          </div>
        </Link>

        <Rating style={{ maxWidth: 150 }} value={storedRating} readOnly />

        <div className='d-flex gap-2 mb-3'>
          {isForSale ? (
            <button className='btn btn-primary' onClick={addToBuy}>
              Buy
            </button>
          ) : (
            <button className='btn btn-primary disabled' disabled>
              Not for sale
            </button>
          )}
          {/* <button
            className='btn btn-info'
            data-bs-toggle='modal'
            data-bs-target={`#reviewModal${id}`}
            onClick={toggleModal}
          >
            Review
          </button> */}

          {!isForSale ? (
            <button className='btn btn-info' onClick={addToLoan}>
              Loan
            </button>
          ) : (
            <button className='btn btn-info disabled' disabled>
              Not for loan
            </button>
          )}

          {/* <ReviewModal
            id={id}
            title={title}
            show={showModal}
            handleClose={toggleModal}
            setStoredRating={setStoredRating}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
