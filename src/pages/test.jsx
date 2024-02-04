import { useContext, useEffect, useState } from 'react';
import { BookDetailsContext } from '../hooks/bookDetailsContext';
import { Rating } from '@smastrom/react-rating';
import ReviewModal from '../components/ReviewModal';

const BookPage = () => {
  const [storedRating, setStoredRating] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { bookDetails, id } = useContext(BookDetailsContext);

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, [bookDetails, id]);

  // console.log('bookDetails', bookDetails);
  // const smallThumbnail = bookDetails.volumeInfo.imageLinks.smallThumbnail;

  const imageCover = bookDetails.volumeInfo.imageLinks.medium;
  // const price = bookDetails.saleInfo.listPrice.amount;
  // const currency = bookDetails.saleInfo.listPrice.currencyCode;
  // const pages = bookDetails.volumeInfo.pageCount;

  console.log('imageCover', imageCover);

  const descriptionWithHtml = bookDetails?.volumeInfo?.description || '';
  const descriptionWithoutHtml = descriptionWithHtml.replace(/<[^>]*>/g, '');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='card mb-3 mx-auto' style={{ maxWidth: '650px' }}>
      <div className='row g-2 '>
        {bookDetails ? (
          <>
            <div className='col-md-4 d-flex flex-column gap-1 text-start p-3'>
              <img
                src={imageCover}
                className='img-fluid'
                alt={bookDetails.volumeInfo.title}
              />
              <p className='card-text'>
                {bookDetails.volumeInfo.authors}
                <br></br>
                {bookDetails.volumeInfo.publishedDate}
              </p>
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
                {/* <button
                  className='btn btn-info'
                  data-bs-toggle='modal'
                  data-bs-target={`#reviewModal${id}`}
                  onClick={toggleModal}
                >
                  Review
                </button> */}
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
