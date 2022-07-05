import React, { ChangeEvent, useEffect, useState } from 'react';
import BooksView from './Books-View';
import './Books.css';
import booksService from '../../api/books/books-service';

const BooksContainer = () => {
  useEffect(() => {}, []);

  const [inputValue, setInputValue] = useState('');
  const [books, setBooks] = useState([]);
  const [orderBy, setOrderBy] = useState('relevance');
  const [maxResults, setMaxResults] = useState(40);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const booksData = await booksService.getAllBooks(inputValue, orderBy, maxResults);
    setBooks(booksData.items);
    console.log(booksData.items);
  };

  return (
    <BooksView
      formSubmit={formSubmit}
      inputValue={inputValue}
      changeHandler={changeHandler}
      books={books}
    />
  );
};

export default BooksContainer;
