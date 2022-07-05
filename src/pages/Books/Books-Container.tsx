import React, { ChangeEvent, useEffect, useState } from 'react';
import BooksView from './Books-View';
import booksService from '../../api/books/books-service';
import { getBooksAsync, setSorting, setCategory } from '../../store/slices/book-slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/types';
import './Books.css';

const BooksContainer = () => {
  useEffect(() => {}, []);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, orderBy, category } = useSelector((state: RootState) => state.book);
  const [inputValue, setInputValue] = useState('');
  const [books, setBooks] = useState([]);
  const [maxResults, setMaxResults] = useState(40);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const booksData = await booksService.getAllBooks(inputValue, orderBy, maxResults, category);
    setBooks(booksData.items);
    dispatch(getBooksAsync({ inputValue, orderBy, maxResults, category }));
    console.log(booksData.items);
  };
  const selectSortingHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSorting(e.target.value));
    console.log(e.target.value);
  };
  const selectCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
    console.log(e.target.value);
  };

  return (
    <BooksView
      formSubmit={formSubmit}
      inputValue={inputValue}
      changeHandler={changeHandler}
      books={books}
      isLoading={isLoading}
      selectSortingHandler={selectSortingHandler}
      orderBy={orderBy}
      category={category}
      selectCategoryHandler={selectCategoryHandler}
    />
  );
};

export default BooksContainer;
