import React from 'react';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      Load more
    </button>
  );
};