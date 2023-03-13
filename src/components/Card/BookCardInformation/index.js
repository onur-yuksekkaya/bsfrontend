import { useState, useEffect, useContext } from 'react';

// CardCollapse component
const CardCollapse = (props) => {
  // destructuring props
  const { book } = props;
  // context hooks

  // state
  const [collapsed, setCollapsed] = useState(true);

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div
      className={`book-info book-info--${collapsed ? 'collapsed' : 'expanded'}`}
      onClick={() => setCollapsed((prev) => !prev)}
    >
      <div className="book-info__content">
        <h2 className="book-info__content__title">{book.title}</h2>
        <svg
          className={`book-info__content__${!collapsed && 'expanded'}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18L15 12L9 6" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {!collapsed && (
        <div className="book-info__inner-content">
          <div className="inner-content__editions">{book?.edition_count} Editions</div>
          <div className="inner-content__first_published">First Published: {book.first_publish_year}</div>
          <div className="inner-content__key-value">{book?.number_of_pages_median} pages</div>
          <div className="inner-content__key-value">32 hours read time</div>
        </div>
      )}
    </div>
  );
};

// export
export default CardCollapse;
