import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
  <div>
     <LazyLoadImage
    alt={image.alt}
    effect="blur"
    src={image.src} />
  </div>
);

export default MyImage;