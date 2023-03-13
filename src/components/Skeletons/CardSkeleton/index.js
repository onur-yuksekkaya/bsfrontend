import { useState, useEffect, useContext } from 'react';
import ContentLoader from 'react-content-loader';

// CardSkeleton component
const CardSkeleton = (props) => {
  // destructuring props

  // context hooks

  // state

  // effect

  // queries

  // other variables/functions/handlers

  // render
  return (
    <div className="skeletons">
      <ContentLoader
        width={350}
        height={600}
        viewBox="0 0 350 600"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
      >
        <rect x="4" y="8" rx="3" ry="3" width="8" height="340" />
        <rect x="5" y="343" rx="3" ry="3" width="331" height="7" />
        <rect x="329" y="9" rx="3" ry="3" width="8" height="340" />
        <rect x="30" y="50" rx="3" ry="3" width="270" height="50" />
        <rect x="30" y="120" rx="3" ry="3" width="270" height="50" />
        <rect x="30" y="190" rx="3" ry="3" width="270" height="50" />
        <rect x="30" y="260" rx="3" ry="3" width="270" height="50" />
        <rect x="5" y="8" rx="3" ry="3" width="331" height="7" />
      </ContentLoader>
    </div>
  );
};

// export
export default CardSkeleton;
