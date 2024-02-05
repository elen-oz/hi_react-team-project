import { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { BookDetailsContext } from '../hooks/bookDetailsContext';
import { CartContext } from '../hooks/CartContext';
import { LoanCartContext } from '../hooks/loanCartContext';
import ReviewModal from '../components/ReviewModal';

const BookPage = () => {
  const { bookDetails, id } = useContext(BookDetailsContext);
  const { buyItem } = useContext(CartContext);
  const { loanItem } = useContext(LoanCartContext);

  const descriptionWithHtml = bookDetails?.volumeInfo?.description || '';
  const descriptionWithoutHtml = descriptionWithHtml.replace(/<[^>]*>/g, '');

  const [storedRating, setStoredRating] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log('bookDetails', bookDetails);

  const isForSale = bookDetails?.saleInfo?.listPrice !== undefined;
  console.log('isForSale', isForSale);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, [bookDetails, id]);

  return (
    <div className='px-2 card mb-3 mx-auto' style={{ maxWidth: '650px' }}>
      <div className='row g-2 '>
        {bookDetails ? (
          <>
            <div className='col-md-4 d-flex flex-column gap-1 text-start p-3'>
              <img
                src={bookDetails.volumeInfo.imageLinks.thumbnail}
                className='img-fluid rounded-start'
                alt={bookDetails.volumeInfo.title}
                style={{ maxWidth: '200px' }}
              />
              <p className='card-text'>
                {bookDetails.volumeInfo.authors}
                <br></br>
                {bookDetails.volumeInfo.publishedDate}
              </p>
              {bookDetails.saleInfo?.listPrice && (
                <div>{`${bookDetails.saleInfo?.listPrice?.amount} ${bookDetails.saleInfo?.listPrice?.currencyCode}`}</div>
              )}

              {isForSale ? (
                <button
                  className='btn btn-secondary w-100'
                  onClick={() => buyItem(bookDetails)}
                >
                  Buy
                </button>
              ) : (
                <button
                  className='btn btn-info w-100'
                  onClick={() => loanItem(bookDetails)}
                >
                  Loan
                </button>
              )}
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{bookDetails.volumeInfo.title}</h5>
                <div className='d-flex gap-3 my-2'>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={storedRating}
                    readOnly
                  />
                  <button
                    className='btn btn-info'
                    data-bs-toggle='modal'
                    data-bs-target={`#reviewModal${id}`}
                    onClick={toggleModal}
                  >
                    Review
                  </button>
                </div>

                <p className='card-text'>
                  {!bookDetails.volumeInfo.description &&
                    'No description provided'}
                  {descriptionWithoutHtml}
                </p>

                <ReviewModal
                  id={id}
                  title={bookDetails.volumeInfo.title}
                  show={showModal}
                  handleClose={toggleModal}
                  setStoredRating={setStoredRating}
                />
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BookPage;
