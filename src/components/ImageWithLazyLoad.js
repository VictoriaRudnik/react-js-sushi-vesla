import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const ImageWithLazyLoad = (props) => {
  const { image } = props;

  return (
    <div>
      <LazyLoadImage
        alt={image.alt}
        effect="blur"
        src={image.src}
        height={image.height}
        width={image.width}
      />
    </div>
  );
};
