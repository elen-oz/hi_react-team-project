import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsContext } from '../hooks/bookDetailsContext';
import { Rating } from '@smastrom/react-rating';

const BookPage = () => {
  const { bookDetails } = useContext(BookDetailsContext);

  const [storedRating, setStoredRating] = useState(null);

  // useEffect(() => {
  //   const storedRatingData = localStorage.getItem(`reviewData${id}`);
  //   if (storedRatingData) {
  //     const parsedData = JSON.parse(storedRatingData);
  //     setStoredRating(parsedData.rating);
  //   }
  // }, [bookDetails]);

  return (
    <div className='card mb-3 m-4' style={{ maxWidth: '540px' }}>
      <div className='row g-2 '>
        {bookDetails ? (
          <>
            <div className='col-md-4'>
              <img
                src={bookDetails.volumeInfo.imageLinks.thumbnail}
                className='img-fluid rounded-start'
                alt={bookDetails.volumeInfo.title}
                style={{ padding: '1rem' }}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>{bookDetails.volumeInfo.title}</h5>
                <p className='card-text'>
                  {bookDetails.volumeInfo.description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {/* <div className='container'>
      {bookDetails ? (
        <div className='card' style={{ width: '18rem' }}>
          <img
            src={bookDetails.volumeInfo.imageLinks.thumbnail}
            className='card-img-top'
            alt={bookDetails.volumeInfo.title}
          />

          <div className='card-body'>
            <h5 className='card-title'>{bookDetails.volumeInfo.title}</h5>
            <Rating style={{ maxWidth: 150 }} value={storedRating} readOnly />
            <p className='card-text'>{bookDetails.volumeInfo.description}</p>
            <button className='btn btn-primary'>More Info</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
};

export default BookPage;
