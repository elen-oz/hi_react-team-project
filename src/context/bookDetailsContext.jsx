import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BookDetailsContext = createContext();

const BookDetailsProvider = ({ children }) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error('Failed to fetch book details');
        }

        const data = await response.json();
        setBookDetails(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <BookDetailsContext.Provider value={{ bookDetails, id, isLoading }}>
      {children}
    </BookDetailsContext.Provider>
  );
};

export default BookDetailsProvider;
