import React from 'react';
import BookItem from '../../components/BookItem';
import { IBook, IBooksSearch } from './Books-Types';

const BooksView = ({ formSubmit, inputValue, changeHandler, books }: IBooksSearch) => {
  return (
    <main className="wrapper books-wrapper">
      <form onSubmit={formSubmit} className="form-submit">
        <h2>Search for books</h2>
        <div className="search">
          <div className="input-search">
            <input type="text" value={inputValue} onChange={changeHandler} />
          </div>
          <div className="btn btn-submit">
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="select-books">
          <div className="form__categories">
            <label>Categories</label>
            <select name="" id="">
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </select>
          </div>
          <div className="form__sorting-by">
            <label htmlFor="">Sorting by</label>
            <select name="" id="">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </form>
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
    </main>
  );
};

export default BooksView;
