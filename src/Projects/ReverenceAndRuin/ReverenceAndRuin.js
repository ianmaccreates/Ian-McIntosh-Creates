import React, { useRef, useEffect } from 'react';
import "./ReverenceAndRuin.css";
import lg from 'lightgallery';
import lgZoom from 'lg-zoom';
import lgThumbnail from 'lg-thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const ReverenceAndRuin = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const instance = lg(galleryRef.current, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      licenseKey: '',
    });

    return () => {
      try {
        instance.destroy();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // Lazy-load gallery images using IntersectionObserver (with native fallbacks)
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

  // Dynamically load all images from the images folder and optional thumbs folder.
  const imagesContext = require.context('./images', false, /\.(jpe?g|png|webp|gif)$/i);
  let thumbsContext = null;
  try {
    thumbsContext = require.context('./images/thumbs', false, /\.(jpe?g|png|webp|gif)$/i);
  } catch (e) {
    // thumbs folder may not exist; we'll fallback to full images
    thumbsContext = null;
  }

  // Build a list of objects { src, thumb }
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
    <div className="reverence-and-ruin-page">
      <h2>Reverence and Ruin</h2>
      <div ref={galleryRef} className="rnr-gallery">
        {images.map((imgObj, i) => (
          <a key={i} href={imgObj.src} className="rnr-item" data-lg-size="1200-800" data-sub-html={imgObj.filename}>
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

export default ReverenceAndRuin;