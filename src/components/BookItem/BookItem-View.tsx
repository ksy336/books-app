import React, { ReactNode } from 'react';
import { IBookItem } from './BookItem-Types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/types';
import { filterForDetailsPage } from '../../store/slices/book-slice';

const BookItemView = ({ category, picture, title, authors, id }: IBookItem) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(filterForDetailsPage(id));
  };

  return (
    <>
      <Link to="/book">
        <article className="card" onClick={handleClick}>
          <div className="image-book">
            <img src={picture} alt="it's a picture of book" />
          </div>
          <div className="book-info-block">
            <div className="book-category">
              {category?.map((category: ReactNode) => (
                <p key={Math.random().toString()}>{category}</p>
              ))}
            </div>
            <div className="book-title">
              <p>{title}</p>
            </div>
            <div className="book-authors">
              {authors?.map((author: ReactNode) => (
                <p key={Math.random().toString()}>{author}</p>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default BookItemView;
