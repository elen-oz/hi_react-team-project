import { useContext } from 'react';
import CardItem from '../components/CardItem';
import { BookContext } from '../hooks/bookContext';
import { CartContext } from '../hooks/CartContext';
import { LoanCartContext } from '../hooks/loanCartContext';
import noImage from '../assets/No-Image-Placeholder.png';

const ListCardItems = () => {
  const { books } = useContext(BookContext);
  const { buyItem } = useContext(CartContext);
  const { loanItem } = useContext(LoanCartContext);

  // const handleLoanItem = (id) => {
  //   console.log('clicked item id:', id);
  //   loanItem(id);
  // };

  return (
    <>
      {books.map((book) => {
        return (
          <CardItem
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail ?? noImage}
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
            addToBuy={() => {
              buyItem(book);
            }}
            addToLoan={() => {
              loanItem(book);
            }}
            isForSale={book?.saleInfo?.listPrice !== undefined}
          />
        );
      })}
    </>
  );
};

export default ListCardItems;
