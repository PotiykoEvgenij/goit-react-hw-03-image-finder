import React from 'react';
import styles from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ image, onItemClick }) => {
  const { id, webformatURL, largeImageURL } = image;

  const handleClick = () => {
    onItemClick(largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={styles['ImageGalleryItem-image']}
        onClick={handleClick}
      />
    </li>
  );
};
