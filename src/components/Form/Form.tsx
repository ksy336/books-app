import React from 'react';
import Button from '../Button/Button';
import { IBooksSearch } from '../../pages/Books/Books-Types';

const Form = ({
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
    <form onSubmit={formSubmit} className="form-submit">
      <h2>Search for books</h2>
      <div className="search">
        <div className="input-search">
          <input type="text" value={inputValue} onChange={changeHandler} />
        </div>
        <div className="btn btn-submit">
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="select-books">
        <div className="form__categories">
          <label>Categories</label>
          <select value={category} onChange={selectCategoryHandler}>
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
          <select value={orderBy} onChange={selectSortingHandler}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
