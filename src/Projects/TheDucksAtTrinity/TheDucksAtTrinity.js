import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TheDucksAtTrinity.css';

const TheDucksAtTrinity = () => {
  let images = [];
  try {
    const imagesContext = require.context('./images', false, /\.(webp|jpe?g|png|gif)$/i);
    images = imagesContext.keys().map((key) => {
      const src = imagesContext(key);
      const filename = key.replace('./', '');
      return { id: filename, src, filename };
    });
  } catch (err) {}

  const sliderRef = useRef(null);
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: true, arrows: true };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') sliderRef.current && sliderRef.current.slickPrev();
      if (e.key === 'ArrowRight') sliderRef.current && sliderRef.current.slickNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="td-page">
      <h2>The Ducks at Trinity</h2>
      <p className="td-note">Use ← and → to navigate</p>
      <div className="td-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img) => (
            <div key={img.id} className="td-slide">
              <img src={img.src} alt={img.filename} className="td-slide-img" loading="lazy" decoding="async" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TheDucksAtTrinity;
