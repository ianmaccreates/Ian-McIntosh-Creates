import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ItalianCarFest22.css';

const ItalianCarFest22 = () => {
  // Load images from the local images folder. If the folder doesn't exist,
  // fall back to an empty array so the component doesn't crash during build.
  let images = [];
  try {
    // load from images22 per request
    const imagesContext = require.context('./images22', false, /\.(webp|jpe?g|png|gif)$/i);
    images = imagesContext.keys().map((key) => {
      const src = imagesContext(key);
      const filename = key.replace('./', '');
      return { id: filename, src, filename };
    });
  } catch (err) {
    // No images folder or no matching files; images stays as []
    // console.warn('ItalianCarFest22: no images found', err);
  }

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        sliderRef.current && sliderRef.current.slickPrev();
      } else if (e.key === 'ArrowRight') {
        sliderRef.current && sliderRef.current.slickNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="icf-page">
      <h2>Italian Car Fest 2022</h2>
      <p className="icf-note">Use ← and → to navigate</p>
      <div className="icf-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img) => (
            <div key={img.id} className="icf-slide">
              <img src={img.src} alt={img.filename} className="icf-slide-img" loading="lazy" decoding="async" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ItalianCarFest22;
