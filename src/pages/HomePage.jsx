import React, { useState, useEffect } from "react";
import CardItem from "../components/CardItem";

const Homepage = () => {
  const [books, setBooks] = useState([]);
  const apiKey = "AIzaSyCf0-8UvYIxpo88-8_sTInFOi-9Hf-Jr4g";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=*&maxResults=30&key=${apiKey}`
        );

        const data = await response.json();

        if (data.items) {
          // Filter books that have imageLinks.thumbnail
          const filteredBooks = data.items.filter(
            (book) =>
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
          );

          setBooks(filteredBooks);
        } else {
          console.error("No books found in the response");
        }
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <CardItem books={books} />
    </div>
  );
};

export default Homepage;
