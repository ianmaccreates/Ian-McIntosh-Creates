import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Polacon.css';

const Polacon9 = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const links = galleryRef.current.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const img = new Image();
        img.src = link.href;
        img.onload = () => {
          const modal = document.createElement('div');
          modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: pointer;
          `;
          modal.innerHTML = `<img src="${link.href}" style="max-width: 90%; max-height: 90%; object-fit: contain;" />`;
          modal.onclick = () => modal.remove();
          document.body.appendChild(modal);
        };
      });
    });
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;
    const imgs = galleryRef.current.querySelectorAll('img[data-src]');
    if (!imgs.length) return;

    const onIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    };

    const io = new IntersectionObserver(onIntersection, { root: null, rootMargin: '200px' });
    imgs.forEach(img => io.observe(img));

    return () => io.disconnect();
  }, []);

  let images = [];
  try {
    const imagesContext = require.context('./images', false, /\.(jpe?g|png|webp|gif)$/i);
    images = imagesContext.keys().map((key) => {
      const src = imagesContext(key);
      const filename = key.replace('./', '');
      return { id: filename, src, filename };
    });
  } catch (err) {
    images = [];
  }

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
    <div className="polacon-page">
      <h2>POLACON 9</h2>
      <p className="polaroid-note">Use ← and → to navigate</p>
      <div className="polaroid-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img) => (
            <div key={img.id} className="polaroid-slide">
              <img src={img.src} alt={img.filename} className="polaroid-slide-img" loading="lazy" decoding="async" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Polacon9;
