import React, { useState, useEffect, useContext } from "react";
import CardItem from "../components/CardItem";
import { BookContext } from "../hooks/bookContext";

const Homepage = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return books.map((book) => {
    return (
      <CardItem
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
      />
    );
  });
};

export default Homepage;
