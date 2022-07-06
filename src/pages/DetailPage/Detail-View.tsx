import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import DetailBook from '../../components/DetailBook';

const DetailView = () => {
  const filteredBooks = useSelector((state: RootState) => state.book.filteredBooks);
  return (
    <div className="wrapper details-container">
      {filteredBooks.map((book: any) => (
        <DetailBook
          key={book.id}
          category={book?.volumeInfo?.categories}
          picture={book?.volumeInfo?.imageLinks?.thumbnail}
          title={book?.volumeInfo?.title}
          authors={book?.volumeInfo?.authors}
          description={book?.volumeInfo?.description}
        />
      ))}
    </div>
  );
};

export default DetailView;
