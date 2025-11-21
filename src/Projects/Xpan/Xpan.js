import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Xpan.css';

const Xpan = () => {
  const imagesContext = require.context('./images', false, /\.(webp|jpe?g|png|gif)$/i);
  const images = imagesContext.keys().map((key) => {
    const src = imagesContext(key);
    const filename = key.replace('./', '');
    return { id: filename, src, filename };
  });

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

  // Optional: allow arrow keys to navigate this gallery too
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
    <div className="xpan-page">
      <h2>XPAN</h2>
      <p className="xpan-note">Use ← and → to navigate</p>
      <div className="xpan-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img) => (
            <div key={img.id} className="xpan-slide">
              <img src={img.src} alt={img.filename} className="xpan-slide-img" loading="lazy" decoding="async" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Xpan;
