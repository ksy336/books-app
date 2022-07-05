import React, { ReactNode } from 'react';
import { IBookItem } from './BookItem-Types';

const BookItemView = ({ category, picture, title, authors }: IBookItem) => {
  return (
    <article className="card">
      <div className="image-book">
        <img src={picture} alt="it's a picture of book" />
      </div>
      <div className="book-category">
        <p className="category">{category}</p>
      </div>
      <div className="book-title">
        <p>{title}</p>
      </div>
      <div className="book-authors">
        {authors?.map((author: ReactNode) => (
          <p key={Math.random().toString()}>{author}</p>
        ))}
      </div>
    </article>
  );
};

export default BookItemView;
