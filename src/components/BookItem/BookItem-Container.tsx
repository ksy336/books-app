import React from 'react';
import BookItemView from './BookItem-View';
import { IBookItem } from './BookItem-Types';
import './BookItem.css';

const BookItemContainer = ({ category, picture, title, authors }: IBookItem) => {
  return <BookItemView category={category} picture={picture} title={title} authors={authors} />;
};

export default BookItemContainer;
