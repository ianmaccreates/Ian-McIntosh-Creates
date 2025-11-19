import React, { useRef, useEffect } from 'react';
import { Plock } from 'react-plock';
import './Portfolio.css';

const Portfolio = () => {
  const galleryRef = useRef(null);

  // Lightbox on image click
  useEffect(() => {
    if (!galleryRef.current) return;
    const images = galleryRef.current.querySelectorAll('img[data-full]');
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        const fullSrc = img.getAttribute('data-full');
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
        modal.innerHTML = `<img src="${fullSrc}" style="max-width: 90%; max-height: 90%; object-fit: contain;" />`;
        modal.onclick = () => modal.remove();
        document.body.appendChild(modal);
      });
    });
  }, []);

  // Dynamically load all images
  const imagesContext = require.context('./images', false, /\.(webp|jpe?g|png|gif)$/i);
  const images = imagesContext.keys().map((key) => {
    const src = imagesContext(key);
    const filename = key.replace('./', '');
    return { id: filename, src, filename };
  });

  return (
    <div className="portfolio-page">
      <h2>PORTFOLIO</h2>
      <div ref={galleryRef} className="portfolio-gallery">
        <Plock
          items={images}
          render={(item) => (
            <div key={item.id} className="plock-item">
              <img
                src={item.src}
                alt={item.filename}
                data-full={item.src}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          gap={12}
          minWidth={200}
        />
      </div>
    </div>
  );
};

export default Portfolio;
