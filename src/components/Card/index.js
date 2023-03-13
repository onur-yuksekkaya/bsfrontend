import { useAuthor } from '@/AuthorContext';
import { useState, useEffect, useContext } from 'react';
import BookCardInformation from './BookCardInformation';

// Card component
const Card = (props) => {
  // destructuring props

  // context hooks
  const { findBookWithIndex } = useAuthor();

  // state

  // effect

  // queries

  // other variables/functions/handlers
  const booklist = props.data.map((i) => findBookWithIndex(i));

  // render
  return (
    <div className="card">
      <h1 className="card__year">{props.year}</h1>
      {booklist.map((book) => (
        <BookCardInformation key={book.id} book={book} />
      ))}
    </div>
  );
};

// export
export default Card;
