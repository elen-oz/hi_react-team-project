import { createContext, useEffect, useState } from 'react';
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooksByCategory = async (searchInput, category) => {
    try {
      setIsLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}subject:${category}&maxResults=40&filter=ebooks&printType=books&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch book data');
      }
      const data = await response.json();
      console.log('data', data);
      setBooks(data.items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooksByCategory('', '');
  }, []);

  return (
    <BookContext.Provider value={{ books, fetchBooksByCategory, isLoading }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookProvider;
