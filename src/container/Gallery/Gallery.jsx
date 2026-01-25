import React, { useRef, useEffect } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);
  const imagesCount = images.length;

  const scroll = (direction) => {
  const container = scrollRef.current;
  const scrollAmount = container.offsetWidth;
  const maxScroll = container.scrollWidth - scrollAmount;

  if (direction === 'left') {
    if (container.scrollLeft === 0) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  } else {
    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};
 useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;
  
  const slideWidth = container.offsetWidth;
  container.scrollLeft = slideWidth;

  const interval = setInterval(() => {
    const visibleWidth = container.offsetWidth;
    const maxScroll = container.scrollWidth - visibleWidth;

    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: visibleWidth,
        behavior: 'smooth',
      });
    }
  }, 2500);

  return () => {
    clearInterval(interval);
  };
}, []);

   


  return (
    <div className="app__gallery app__wrapper section__padding flex__center " id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>

        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          A visual journey through our signature dishes, crafted with love,
          authentic flavors, and the finest ingredients.
        </p>

        
      </div>

      <div className="app__gallery-images">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => scroll('left')}
        />

        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery04, // 🔥 last clone at start
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery01].map(
            (image, index) => (
              <div className="app__gallery-images_card flex__center" key={index}>
                <img src={image} alt="gallery" loading="lazy"/>
                <BsInstagram className="gallery__image-icon" />
              </div>
            )
          )}
        </div>

        <BsArrowRightShort
          className="gallery__arrow-icon"
          onClick={() => scroll('right')}
        />
      </div>
    </div>
  );
};

export default Gallery;
