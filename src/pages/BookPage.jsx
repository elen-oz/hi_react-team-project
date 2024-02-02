import { useContext, useEffect, useState } from 'react';
import { BookDetailsContext } from '../hooks/bookDetailsContext';
import { Rating } from '@smastrom/react-rating';
import ReviewModal from '../components/ReviewModal';

const BookPage = () => {
  const { bookDetails, id } = useContext(BookDetailsContext);

  const descriptionWithHtml = bookDetails?.volumeInfo?.description || '';
  const descriptionWithoutHtml = descriptionWithHtml.replace(/<[^>]*>/g, '');

  const [storedRating, setStoredRating] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const storedRatingData = localStorage.getItem(`reviewData${id}`);
    if (storedRatingData) {
      const parsedData = JSON.parse(storedRatingData);
      setStoredRating(parsedData.rating);
    }
  }, [bookDetails]);

  return (
    <div className='card mb-3 mx-auto' style={{ maxWidth: '650px' }}>
      <div className='row g-2 '>
        {bookDetails ? (
          <>
            <div className='col-md-4 d-flex flex-column gap-1 text-start p-3'>
              <img
                src={bookDetails.volumeInfo.imageLinks.smallThumbnail}
                className='img-fluid rounded-start'
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
                <Rating
                  style={{ maxWidth: 150 }}
                  value={storedRating}
                  readOnly
                />

                <p className='card-text'>
                  {!bookDetails.volumeInfo.description &&
                    'No description provided'}
                  {descriptionWithoutHtml}
                </p>
                <button
                  className='btn btn-info'
                  data-bs-toggle='modal'
                  data-bs-target={`#reviewModal${id}`}
                  onClick={toggleModal}
                >
                  Review
                </button>
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
