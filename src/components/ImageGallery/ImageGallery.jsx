import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (largeImageURL) => {
    setSelectedImage(largeImageURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ul className={styles.ImageGallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onItemClick={openModal}
          />
        ))}
      </ul>
      {selectedImage && (
        <Modal isOpen={true} image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};
