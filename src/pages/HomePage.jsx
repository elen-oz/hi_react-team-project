import { useState, useEffect, useContext } from 'react';
import CardItem from '../components/CardItem';
import { BookContext } from '../hooks/bookContext';

const Homepage = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='container d-flex flex-row flex-wrap gap-2 p-2'>
      <div className='row row-cols-5 align-items-center g-3'>
        {books.map((book) => (
          <CardItem
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            id={book.id}
            price={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.amount
                : 'No Price'
            }
            currency={
              book.saleInfo.listPrice
                ? book.saleInfo.listPrice.currencyCode
                : ''
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
