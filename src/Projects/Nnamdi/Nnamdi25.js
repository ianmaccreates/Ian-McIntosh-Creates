import React, { useRef, useEffect } from 'react';
import "./Nnamdi.css";

const Nnamdi25 = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    
    // Simple lightbox on image click
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

  // Lazy-load images using IntersectionObserver
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

  // Dynamically load all images from the images folder and optional thumbs folder
  const imagesContext = require.context('./images', false, /\.(jpe?g|png|webp|gif)$/i);
  let thumbsContext = null;
  try {
    thumbsContext = require.context('./images/thumbs', false, /\.(jpe?g|png|webp|gif)$/i);
  } catch (e) {
    thumbsContext = null;
  }

  const images = imagesContext.keys().map((key) => {
    const src = imagesContext(key);
    const filename = key.replace('./', '');
    let thumb = src;
    if (thumbsContext) {
      const thumbKey = `./${filename}`;
      if (thumbsContext.keys().includes(thumbKey)) {
        thumb = thumbsContext(thumbKey);
      }
    }
    return { src, thumb, filename };
  });

  return (
    <div className="nnamdi-page">
      <h2>NNAMDI 2025 ON TOUR W/ PILES</h2>
      <div ref={galleryRef} className="masonry-gallery">
        {images.map((imgObj, i) => (
          <a key={i} href={imgObj.src} className="masonry-item">
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              data-src={imgObj.thumb}
              alt={imgObj.filename}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nnamdi25;
