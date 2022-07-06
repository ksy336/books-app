import React, { ReactNode } from 'react';
import { IDetailsBook } from './DetailBook-Types';

const DetailBookView = ({ category, picture, title, authors, description }: IDetailsBook) => {
  return (
    <main className="details-content layout-2-column">
      <div className="picture-book">
        <img src={picture} alt="it's a picture" />
      </div>
      <div className="category-all">
        <div className="category-item">
          {category?.map((category: ReactNode) => (
            <span key={Math.random().toString()}>{category}</span>
          ))}
        </div>
        <div className="book__title">
          <span>{title}</span>
        </div>
        <div>
          <span>{authors}</span>
        </div>
        <div className="book-description">
          <span>{description}</span>
        </div>
      </div>
    </main>
  );
};

export default DetailBookView;
