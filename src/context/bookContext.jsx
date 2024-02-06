import { createContext } from 'react';
import { useBookFetching } from '../hooks/useBookFetching';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const { books, fetchBooksByCategory, isLoading } = useBookFetching();

  return (
    <BookContext.Provider value={{ books, fetchBooksByCategory, isLoading }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookProvider;
