import React from 'react';
import BookItem from '../../components/BookItem';
import { IBook, IBooksSearch } from './Books-Types';
import Form from '../../components/Form/Form';

const BooksView = ({
  formSubmit,
  inputValue,
  changeHandler,
  books,
  isLoading,
  selectSortingHandler,
  orderBy,
  selectCategoryHandler,
  category,
}: IBooksSearch) => {
  return (
    <main className="wrapper books-wrapper">
      <Form
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
      {isLoading && (
        <div className="spinner-block">
          <div className="spinner" />
          <span>Loading...</span>
        </div>
      )}
      {!isLoading && (
        <div className="card-container">
          {books?.map((book: IBook) => {
            return (
              <BookItem
                key={book.id}
                category={book?.volumeInfo?.categories}
                picture={book?.volumeInfo?.imageLinks?.thumbnail}
                title={book?.volumeInfo?.title}
                authors={book?.volumeInfo?.authors}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default BooksView;
