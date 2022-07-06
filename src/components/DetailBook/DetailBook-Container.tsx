import React from 'react';
import DetailBookView from './DetailBook-View';
import './DetailBook.css';
import { IDetailsBook } from './DetailBook-Types';

const DetailBookContainer = ({ category, picture, title, authors, description }: IDetailsBook) => {
  return (
    <DetailBookView
      category={category}
      picture={picture}
      title={title}
      authors={authors}
      description={description}
    />
  );
};

export default DetailBookContainer;
