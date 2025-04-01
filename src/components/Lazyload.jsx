import React from "react";
import LazyLoad from "react-lazy-load";

 const LazyLoadImage = ({ src, alt, className=""}) => {
  return (
    <LazyLoad  className={className}>
      <img src={src} alt={alt} className={`w-full h-full`} loading="lazy" />
    </LazyLoad>
  );
};

export default LazyLoadImage;
