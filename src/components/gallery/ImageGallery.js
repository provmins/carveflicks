import { useState } from 'react';
import { Button, GalleryBox, GalleryContainer, GalleryImage } from './imageGallery-styled';

const ImageGallery = ({ images }) => {
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GalleryContainer>
      <GalleryBox open={isOpen}>
        {images.map(({ file_path }, idx) => {
          return (
            <GalleryImage key={idx} onClick={() => alert('a')} open={isOpen}>
              <img src={IMAGE_URL + file_path} alt="" />
            </GalleryImage>
          );
        })}
      </GalleryBox>
      {images.length >= 5 && (
        <Button onClick={() => setIsOpen(!isOpen)} open={isOpen}>
          {isOpen ? '닫기' : '더보기'}
          <span />
        </Button>
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;
