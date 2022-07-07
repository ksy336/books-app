import React, { ChangeEvent, useState } from 'react';
import BooksView from './Books-View';
import booksService from '../../api/books/books-service';
import {
  getBooksAsync,
  setSorting,
  setCategory,
  getBooks,
  getTotalItems,
} from '../../store/slices/book-slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/types';
import './Books.css';

const BooksContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, orderBy, category, books, totalItems } = useSelector(
    (state: RootState) => state.book
  );
  const [inputValue, setInputValue] = useState('');
  const [maxResults] = useState(40);
  const [visible, setVisible] = useState(8);

  const fetchAllBooks = async () => {
    const booksData = await booksService.getAllBooks(
      inputValue,
      orderBy,
      maxResults,
      category,
      visible
    );
    dispatch(getBooks(booksData));
    dispatch(getBooksAsync({ inputValue, orderBy, maxResults, category, visible }));
    dispatch(getTotalItems(booksData.totalItems));
  };
  const showMoreItems = async () => {
    setVisible((prev) => prev + 30);
    await fetchAllBooks();
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAllBooks();
  };

  const selectSortingHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSorting(e.target.value));
    console.log(e.target.value);
  };
  const selectCategoryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
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
      totalItems={totalItems}
      showMoreItems={showMoreItems}
      visible={visible}
    />
  );
};

export default BooksContainer;
