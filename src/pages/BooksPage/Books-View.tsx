import React from 'react';
import BookItem from '../../components/BookItem';
import { IBook, IBooksSearch } from './Books-Types';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

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
  totalItems,
  showMoreItems,
  visible,
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
      {books?.length > 0 && <h2 className="books-results">Found {totalItems} results</h2>}
      {!isLoading && (
        <div className="card-container">
          {books?.slice(0, visible)?.map((book: IBook) => {
            return (
              <BookItem
                key={book.id}
                id={book.id}
                category={book?.volumeInfo?.categories}
                picture={book?.volumeInfo?.imageLinks?.thumbnail}
                title={book?.volumeInfo?.title}
                authors={book?.volumeInfo?.authors}
              />
            );
          })}
        </div>
      )}
      {books?.length > 0 && (
        <div className="btn btn-load">
          <Button onClick={showMoreItems}>Load more</Button>
        </div>
      )}
    </main>
  );
};

export default BooksView;
