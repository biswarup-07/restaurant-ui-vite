import React, { useRef, useEffect } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // ✅ AUTO SCROLL FIX
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app__gallery app__wrapper section__padding flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>

        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          A visual journey through our signature dishes, crafted with love,
          authentic flavors, and the finest ingredients.
        </p>

        {/* ✅ CLEAN BUTTON */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="custom__button"
        >
          View More
        </a>
      </div>

      <div className="app__gallery-images">
        <BsArrowLeftShort
          className="gallery__arrow-icon"
          onClick={() => scroll('left')}
        />

        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map(
            (image, index) => (
              <div className="app__gallery-images_card flex__center" key={index}>
                <img src={image} alt="gallery" />
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
